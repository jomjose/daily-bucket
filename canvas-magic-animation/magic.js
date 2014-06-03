var d = document,
    canvas = d.body.appendChild(d.createElement('canvas')),
    context = canvas.getContext('2d'),
    time = 0,
    w = canvas.width = innerWidth,
    h = canvas.height = innerHeight,
    m = Math,
    cos = m.cos,
    sin = m.sin,
    PI = m.PI

    // The main animation loop
    setInterval(function () {
        // Clear
        canvas.width = canvas.width;

        time += .1;

        // The number of particles to generate
        i = 10000

        while (i--) {
            // The magic
            r = (w + h) / 2 * (cos((time + i) * (.05 + (sin(time / 100000) / PI * .2))) / PI)

            context.fillRect(sin(i) * r + w / 2,
            cos(i) * r + h / 2,
            1.5,
            1.5)
        }
    }, 16)
