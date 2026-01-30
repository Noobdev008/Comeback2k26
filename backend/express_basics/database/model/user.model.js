const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true // ✅ creates unique index automatically
    },
    age: Number,
    password: {
      type: String,
      required: true,
      select: false // 🔐 important
    },
    role: {
      type: String,
      default: "user"
    },
    isActive: {
      type: Boolean,
      default: true
    }
  },
  { timestamps: true }
);

/* =======================
   INDEXES (PERFORMANCE)
======================= */

// login & lookup
// userSchema.index({ email: 1 });

// filtering
userSchema.index({ isActive: 1 });
userSchema.index({ role: 1 });

// filter + sort (MOST IMPORTANT)
userSchema.index({ isActive: 1, age: 1 });

// (optional later for text search)
// userSchema.index({ name: "text", email: "text" });

module.exports = mongoose.model("User", userSchema);
