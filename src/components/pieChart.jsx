import { Pie, PieChart, Tooltip } from 'recharts'
import pieDados from '../mock/pieDados.json'

export const GPie = () => {
    return (
        <PieChart
            style={{ width: '100%', height: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }}
            responsive
        >
            <Pie
                data={pieDados.data01}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius="50%"
                fill="#8884d8"
                stroke="white"
                isAnimationActive={true}
            />
            <Pie
                data={pieDados.data02}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius="60%"
                outerRadius="80%"
                fill="#82ca9d"
                stroke="white"
                label
                isAnimationActive={true}
            />
            <Tooltip />
        </PieChart>
    )
}