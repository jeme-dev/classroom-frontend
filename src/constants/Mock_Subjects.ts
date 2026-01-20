import { Subject } from "@/types";
export const MOCK_SUBJECTS: Subject[] = [
  {
    id: 1,
    code: "CS50",
    name: "Introduction to Computer Science",
    department: "Computer Science",
    description:
      "Foundational course covering algorithms, data structures, and programming basics.",
    createdAt: new Date().toISOString(),
  },
  {
    id: 2,
    code: "ECON101",
    name: "Principles of Economics",
    department: "Economics",
    description:
      "Covers microeconomics and macroeconomics fundamentals with real-world applications.",
    createdAt: new Date().toISOString(),
  },
  {
    id: 3,
    code: "ENGR40",
    name: "Intro to Electronics",
    department: "Electrical Engineering",
    description:
      "Hands-on exploration of circuits, signals, and electronic systems.",
    createdAt: new Date().toISOString(),
  },
  {
    id: 4,
    code: "PSYCH1",
    name: "Introduction to Psychology",
    department: "Psychology",
    description: "Explores human behavior, cognition, and mental processes.",
    createdAt: new Date().toISOString(),
  },
  {
    id: 5,
    code: "HIST200",
    name: "European History",
    department: "History",
    description:
      "Examines major events shaping Europe from the Renaissance to modern times.",
    createdAt: new Date().toISOString(),
  },
  {
    id: 6,
    code: "PHIL101",
    name: "Ethics and Philosophy",
    department: "Philosophy",
    description:
      "Introduction to moral philosophy, ethics, and critical reasoning.",
    createdAt: new Date().toISOString(),
  },
  {
    id: 7,
    code: "PHY101",
    name: "Classical Mechanics",
    department: "Physics",
    description: "Covers Newtonian mechanics, motion, and energy principles.",
    createdAt: new Date().toISOString(),
  },
  {
    id: 8,
    code: "AI600",
    name: "Artificial Intelligence",
    department: "Computer Science",
    description:
      "Explores machine learning, neural networks, and AI applications.",
    createdAt: new Date().toISOString(),
  },
];
