export default function handler(req, res) {
  // DST logic for USA
  function isDST_USA(date) {
    const year = date.getFullYear();
    const mar = new Date(year, 2, 1);
    const nov = new Date(year, 10, 1);
    // Second Sunday in March
    let startDST = new Date(mar);
    startDST.setDate(1 + ((7 - mar.getDay()) % 7) + 7);
    // First Sunday in November
    let endDST = new Date(nov);
    endDST.setDate(1 + ((7 - nov.getDay()) % 7));
    return date >= startDST && date < endDST;
  }
  // DST logic for Germany
  function isDST_Germany(date) {
    const year = date.getFullYear();
    const mar = new Date(year, 2, 31);
    const oct = new Date(year, 9, 31);
    // Last Sunday in March
    let startDST = new Date(mar);
    startDST.setDate(mar.getDate() - mar.getDay());
    // Last Sunday in October
    let endDST = new Date(oct);
    endDST.setDate(oct.getDate() - oct.getDay());
    return date >= startDST && date < endDST;
  }
  // Format date/time
  function pad(n) { return n < 10 ? '0' + n : n; }
  const now = new Date();
  const yyyy = now.getFullYear();
  const mm = pad(now.getMonth() + 1);
  const dd = pad(now.getDate());
  const hh = pad(now.getHours());
  const min = pad(now.getMinutes());
  const ss = pad(now.getSeconds());
  const dateStr = `${yyyy}-${mm}-${dd}`;
  const timeStr = `${hh}:${min}:${ss}`;
  // Get UTC offset
  const offsetMin = -now.getTimezoneOffset();
  const sign = offsetMin >= 0 ? '+' : '-';
  const absMin = Math.abs(offsetMin);
  const offsetHours = Math.floor(absMin / 60);
  const offsetMins = absMin % 60;
  const offsetStr = `UTC${sign}${offsetHours}` + (offsetMins ? `:${pad(offsetMins)}` : '');
  // Get IANA time zone (from request headers or default)
  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC';
  // SVG output
  res.setHeader('Content-Type', 'image/svg+xml');
  res.setHeader('Cache-Control', 'no-cache');
  res.send(`
    <svg width="480" height="80" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#fff"/>
      <text x="20" y="30" font-size="18" font-family="Helvetica" fill="#222">
        Your local time: ${dateStr} ${timeStr} (${tz} | ${offsetStr})
      </text>
      <text x="20" y="55" font-size="16" font-family="Helvetica" fill="#444">
        USA DST: ${isDST_USA(now) ? 'Yes' : 'No'} | Germany DST: ${isDST_Germany(now) ? 'Yes' : 'No'}
      </text>
    </svg>
  `);
}
