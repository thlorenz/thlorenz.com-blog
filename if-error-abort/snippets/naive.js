function filterFiles (entries, cb) {
  var tasks = entries.length
    , files = [];

  if (tasks === 0) cb(null, []);

  entries.forEach(function (entry) {
    fs.stat(entry, function (err, stat) {
      if (err) return cb(err);

      if (stat.isFile()) files.push(entry);

      if (--tasks === 0) cb(null, files);
    });
  });
}

