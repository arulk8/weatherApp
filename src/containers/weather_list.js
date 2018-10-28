import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map'
class WeatherList extends Component {
    renderList(cityData) {
        const name = cityData.city.name;
        const temps = cityData.list.map((val) => { return (val.main.temp) });
        const pressures = cityData.list.map((val) => { return (val.main.pressure) });
        const humidites = cityData.list.map((val) => { return (val.main.humidity) });
        const { lon, lat } = cityData.city.coord;
        return (
            <tr key={name}>
                <td>
                    <GoogleMap lon={lon} lat={lat} />
                </td>
                <td>
                    <Chart data={temps} color="red" unit="K" />
                </td>
                <td>
                    <Chart data={pressures} color="green" unit="hPa" />
                </td>
                <td>
                    <Chart data={humidites} color="blue" unit="%" />
                </td>
            </tr >
        )

    }
    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature(K)</th>
                        <th>Pressure(hpa)</th>
                        <th>Humidity(%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderList)}
                </tbody>
            </table>
        );
    }
}
function mapStateToProps(state) {
    return { weather: state.weather }
}
export default connect(mapStateToProps)(WeatherList);