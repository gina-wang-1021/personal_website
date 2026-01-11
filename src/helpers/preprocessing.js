export function formatDates(start_date, end_date) {
  if (!start_date) return "";

  const format = (date) =>
    new Date(date).toLocaleString("en-US", {
      month: "short",
      year: "numeric",
    });

  const start = format(start_date);
  const end = end_date ? format(end_date) : "Present";

  return `${start} - ${end}`;
}

export function parseSkills(skills) {
  if (!skills || typeof skills !== "string") return [];
  return skills
    .split(",")
    .map((skill) => skill.trim())
    .filter(Boolean);
}
