import React, { useEffect, useState } from "react";
import api from "../api/api";
import "./Admin.css";

const STATUS_OPTIONS = ["New", "Attempted", "Converted", "Closed"];

// Helper function to convert month number to month name
const getMonthName = (monthNumber) => {
  const months = {
    "01": "January", "02": "February", "03": "March", "04": "April",
    "05": "May", "06": "June", "07": "July", "08": "August",
    "09": "September", "10": "October", "11": "November", "12": "December"
  };
  return months[monthNumber] || monthNumber;
};

export default function Admin() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(false);

  // 🟢 Notices
  const [notices, setNotices] = useState([]);
  const [noticeTitle, setNoticeTitle] = useState("");

  // ✅ Fetch Leads and Notices only if logged in
  useEffect(() => {
    if (token) {
      fetchLeads();
      fetchNotices();
    }
  }, [token]);

  const fetchLeads = async () => {
    try {
      setLoading(true);
      const res = await api.get("/leads");
      setLeads(res.data);
    } catch (err) {
      console.error("Error fetching leads:", err);
      // If that fails, try with auth
      try {
        const res = await api.get("/leads", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setLeads(res.data);
      } catch (authErr) {
        console.error("Error fetching leads with auth:", authErr);
      }
    } finally {
      setLoading(false);
    }
  };

  const fetchNotices = async () => {
    try {
      const res = await api.get("/notices", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setNotices(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  // ✅ Update Lead Status
  const updateStatus = async (id, status) => {
    try {
      await api.put(
        `/leads/${id}`,
        { status },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setLeads((prev) =>
        prev.map((lead) =>
          lead._id === id ? { ...lead, status } : lead
        )
      );
    } catch (err) {
      console.error("Error updating status:", err);
    }
  };

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const { data } = await api.post("/auth/login", form);
      localStorage.setItem("token", data.token);
      setToken(data.token);
    } catch {
      setError("Invalid username or password");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  // 🟢 Add Notice
  const handleAddNotice = async (e) => {
    e.preventDefault();
    if (!noticeTitle.trim()) return;
    try {
      const res = await api.post(
        "/notices",
        { title: noticeTitle },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setNotices([res.data, ...notices]);
      setNoticeTitle("");
    } catch (err) {
      console.error("Error adding notice:", err);
    }
  };

  const handleDeleteNotice = async (id) => {
    if (!window.confirm("Delete this notice?")) return;
    try {
      await api.delete(`/notices/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setNotices(notices.filter((n) => n._id !== id));
    } catch (err) {
      console.error("Error deleting notice:", err);
    }
  };

  // ======================= UI =======================
  if (!token) {
    return (
      <div className="loginPage">
        <div className="loginCard">
          <h2>Admin Login</h2>
          <form onSubmit={handleLogin}>
            <input
              name="username"
              placeholder="Username"
              value={form.username}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              required
            />
            <button type="submit">Login</button>
          </form>
          {error && <p className="error">{error}</p>}
        </div>
      </div>
    );
  }

  return (
    <div className="adminPage">
      <div className="adminHeader">
        <h1>Dashboard</h1>
        <button onClick={handleLogout} className="logoutBtn">
          Logout
        </button>
      </div>

      {/* ===== LEAD MANAGER ===== */}
      <h2>Leads Manager</h2>
      {loading ? (
        <p>Loading…</p>
      ) : (
        <div className="tableWrap">
          <table className="adminTable">
            <thead>
              <tr>
                <th>Received</th>
                <th>Name</th>
                <th>Mobile</th>
                <th>Email</th>
                <th>Course</th>
                <th>City</th>
                <th>Program Type</th>
                <th>Program ID</th>
                <th>Centre ID</th>
                <th>Intake</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {leads.map((lead) => (
                <tr key={lead._id}>
                  <td>{new Date(lead.createdAt).toLocaleString()}</td>
                  <td>{lead.name}</td>
                  <td>{lead.mobile}</td>
                  <td>{lead.email}</td>
                  <td>{lead.course}</td>
                  <td>{lead.city}</td>
                  <td>{lead.programType || "-"}</td>
                  <td>{lead.programId || "-"}</td>
                  <td>{lead.centreId || "-"}</td>
                  <td>
                    {lead.intakeMonth && lead.intakeYear 
                      ? `${getMonthName(lead.intakeMonth)} ${lead.intakeYear}` 
                      : lead.intakeMonth || lead.intakeYear 
                        ? `${getMonthName(lead.intakeMonth) || ""} ${lead.intakeYear || ""}`.trim()
                        : "-"}
                  </td>
                  <td>
                    <select
                      value={lead.status || "New"}
                      onChange={(e) => updateStatus(lead._id, e.target.value)}
                      className={`statusSelect ${
                        lead.status?.toLowerCase() || "new"
                      }`}
                    >
                      {STATUS_OPTIONS.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* ===== NOTICES ===== */}
      <div className="noticeSection">
        <h2>Notices & Events</h2>
        <form onSubmit={handleAddNotice} className="noticeForm">
          <input
            type="text"
            placeholder="Enter Notice or Event"
            value={noticeTitle}
            onChange={(e) => setNoticeTitle(e.target.value)}
            required
          />
          <button type="submit">Add</button>
        </form>
        <div className="noticeList">
          {notices.map((n) => (
            <div key={n._id} className="noticeCard">
              <h4>{n.title}</h4>
              <button
                className="deleteBtn"
                onClick={() => handleDeleteNotice(n._id)}
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}