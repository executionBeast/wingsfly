export default function randomColor() {
    // let spectrum = [1,2,3,4,5,6,7,8,9,'A', 'B', 'C', 'D', 'E', 'F']
    // let r = `${spectrum[Math.floor(Math.random()*10 + 1)]}`

    let color = [
        '#8CBA25', '#F19002', '#6F398A', '#2B71AE', '#C5027C', '#D6DA90', '#5E298E'
    ]
    return `${color[Math.floor(Math.random()*10 + 1) % 8]}`
}