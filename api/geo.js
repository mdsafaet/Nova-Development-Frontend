export default function handler(req, res) {
  res.setHeader("Cache-Control", "private, no-store");

  const header = req.headers["x-vercel-ip-country"];

  const country =
    typeof header === "string" && /^[a-z]{2}$/i.test(header)
      ? header.toUpperCase()
      : null;

  return res.status(200).json({ country });
}