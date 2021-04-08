import React from 'react';
import { ResponsiveBar } from '@nivo/bar'
import item from '../../asset/item'
console.log(item)
class Chart extends React.Component {

    render() {

        const colorB = ({ id }) => (id === "Income" ? "rgb(52, 195, 143)" : "rgb(241,113,113)");
        const days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];

        let wlbData = []; // hours coded during and outside of work per day
        let codingAtWorkMinutes = []; // minutes coded at work per day
        let codingOutsideWorkMinutes = []; // minutes coded outside work per day
        const { entries, from, to } = item;
        const workLifeBalanceCalcs = (item) => {
            // map data to two new arrays
            entries.map(day => {
                codingAtWorkMinutes.push(day.Income);
                codingOutsideWorkMinutes.push(day.Expense);
                return true;
            });
            let i;
            for (i = 0; i < days.length; i++) {
                wlbData[i] = {
                    "Day": days[i],
                    "Income": codingAtWorkMinutes[i].toFixed(1),
                    "Expense": codingOutsideWorkMinutes[i].toFixed(1),
                };
                console.log(codingAtWorkMinutes[i]);
            }
        }
        workLifeBalanceCalcs(entries);
        return (
            <div className="chart" >
                <ResponsiveBar
                    data={wlbData}
                    keys={['Income', 'Expense']}
                    indexBy="Day"
                    margin={{ top: 50, right: 13, bottom: 50, left: 60 }}
                    padding={0.4}
                    groupMode="grouped"
                    valueScale={{ type: 'linear' }}
                    indexScale={{ type: 'band', round: true }}
                    colors={colorB}
                    gridYValues={7}
                    // defs={[
                    //     {
                    //         id: 'dots',
                    //         type: 'patternDots',
                    //         background: 'rgb(52, 195, 143)',
                    //         color: '#384cb2',
                    //         size: 4,
                    //         padding: 1,
                    //         stagger: true
                    //     },
                    //     {
                    //         id: 'lines',
                    //         type: 'patternLines',
                    //         background: 'rgb(241,113,113)',
                    //         color: '#eed312',
                    //         rotation: -45,
                    //         lineWidth: 6,
                    //         spacing: 10
                    //     }
                    // ]}
                    // fill={[
                    //     {
                    //         match: {
                    //             id: 'Income'
                    //         },
                    //         id: 'dots'
                    //     },
                    //     {
                    //         match: {
                    //             id: 'Expense'
                    //         },
                    //         id: 'lines'
                    //     }
                    // ]}
                    borderRadius={10}
                    borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
                    axisTop={null}
                    axisRight={null}
                    axisBottom={{
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: '',
                        legendPosition: 'middle',
                        legendOffset: 32
                    }}
                    axisLeft={{
                        tickValues: 7,
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: '',
                        legendPosition: 'middle',
                        legendOffset: -40
                    }}
                    enableLabel={false}
                    labelSkipHeight={12}
                    labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
                    legends={[]}
                    tooltip={function () { }}
                    animate={true}
                    motionStiffness={90}
                    motionDamping={15}
                    theme={{
                        axis: {

                            fontSize: '18px',
                            tickColor: '#eee',
                            ticks: {
                                line: {
                                    stroke: "rgb(42,48,66)",
                                    strokeWidth: 1
                                },
                                text: {
                                    fill: "rgb(172,198,226)",
                                    fontFamily: "Poppins, sans-serif"
                                },
                            },
                            legend: {
                                text: {
                                    fill: "rgb(172,198,226)"
                                }
                            }
                        },
                        grid: {
                            line: {
                                stroke: "#495167",
                                strokeWidth: 0.5
                            }
                        },

                    }}
                />
            </div>
        );
    }
}
export default Chart;