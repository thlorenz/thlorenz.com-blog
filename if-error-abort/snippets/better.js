function filterFiles (entries, cb) {
  var tasks = entries.length
    , abort = false
    , files = [];

  if (tasks === 0) cb(null, []);

  entries.forEach(function (entry) {
    if (abort) return;
    fs.stat(entry, function (err, stat) {
      if (abort) return;
      if (err) { abort = true; return cb(err); }

      if (stat.isFile()) files.push(entry);

      if (--tasks === 0) cb(null, files);
    });
  });
}

