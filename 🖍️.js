!(function () {
    if (document.getElementById('__d')) return;
    let e = document.createElement('canvas');
    (e.id = '__d'), Object.assign(e.style, { position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', pointerEvents: 'auto', zIndex: 1e4, cursor: 'crosshair' }), document.body.appendChild(e);
    let t = e.getContext('2d');
    t.strokeStyle = '#D00';
    let n = !1;
    function i() {
        (e.width = window.innerWidth), (e.height = window.innerHeight), (t.strokeStyle = '#D00');
    } i(), window.addEventListener('resize', i),
        e.addEventListener('mousedown', function (e) {
            (n = !0), t.beginPath(), t.moveTo(e.clientX, e.clientY);
        }),
        e.addEventListener('mousemove', function (e) {
            n && (t.lineTo(e.clientX, e.clientY), t.stroke());
        }),
        e.addEventListener('mouseup', function () {
            n = !1;
        });
})();
