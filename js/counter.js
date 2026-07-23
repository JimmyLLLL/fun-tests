// View counter (CountAPI) — shared across all pages
(function () {
    const NS = "jimmyllll-funtests";
    const pvEl = document.getElementById("pv");
    const uvEl = document.getElementById("uv");
    if (pvEl) {
        fetch("https://api.counterapi.dev/v1/" + NS + "/pv/up")
            .then(r => r.json())
            .then(d => { pvEl.textContent = (d.count || 0).toLocaleString(); })
            .catch(() => { pvEl.textContent = "N/A"; });
    }
    if (uvEl) {
        const uvKey = "funtests_uv_counted";
        if (!localStorage.getItem(uvKey)) {
            fetch("https://api.counterapi.dev/v1/" + NS + "/uv/up")
                .then(r => r.json())
                .then(d => { uvEl.textContent = (d.count || 0).toLocaleString(); localStorage.setItem(uvKey, "1"); })
                .catch(() => { uvEl.textContent = "N/A"; });
        } else {
            fetch("https://api.counterapi.dev/v1/" + NS + "/uv")
                .then(r => r.json())
                .then(d => { uvEl.textContent = (d.count || 0).toLocaleString(); })
                .catch(() => { uvEl.textContent = "N/A"; });
        }
    }
})();
