import React from 'react';
import BottomMenu from './BottomMenu';
import NewsWidget from './NewsWidget';
import GoogleMapReact from 'google-map-react';
import mapstyles from '../../configuration/googlemap.json'
import CalendarWidget from './CalendarWidget';

const key = ''

const TOTAL_POPULATION = 7800000000 // 7.8 Billion on April 2020

export default function MapViewScreen() {

    const [covidData, setCovidData] = React.useState([])

    React.useEffect(() => {
        fetch('https://wuhan-coronavirus-api.laeyoung.endpoint.ainize.ai/jhu-edu/latest?onlyCountries=true').then(res => {
            if (res.status === 200)
                return res.json()
        }).then(resJson => {
            setCovidData(resJson)
        })
    }, [])

    const AnyReactComponent = ({ confirmed, deaths, recovered }) => {
        return (
            <RandomDots confirmed={confirmed} deaths={deaths} recovered={recovered} />
        )
    }

    const getStatisticData = () => {

        const sumRecovered = covidData.reduce((a, {recovered}) => a + recovered, 0);
        const sumConfirmed = covidData.reduce((b, {confirmed}) => b + confirmed, 0);
        const sumDeaths = covidData.reduce((c, {deaths}) => c + deaths, 0);
        return{
            population : TOTAL_POPULATION,
            confirmed: sumConfirmed,
            recovered: sumRecovered,
            deaths :sumDeaths
        }
    }

    const RandomDots = ({ confirmed, deaths, recovered }) => {
        var radius = 1;

        const canvasRef = React.useRef(null)

        const getColor = (status) => {
            switch (status) {
                case 'confirmed': return 'red'
                case 'deaths': return 'black'
                case 'recovered': return 'blue'
            }
        }

        React.useEffect(() => {
            const canvas = canvasRef.current
            const ctx = canvas.getContext('2d')
            ctx.clearRect(0, 0, window.innerHeight, window.innerWidth)
            createRandomNodes(ctx, canvas, confirmed / 2, getColor('confirmed'), radius);
            // createRandomNodes(ctx, canvas, deaths / 2, getColor('deaths'), radius);
            // createRandomNodes(ctx, canvas, recovered / 2, getColor('recovered'), radius);
        }, [])


        function createRandomNodes(context, canvas, num, color, radius) {
            context.clearRect(0, 0, canvas.width, canvas.height);
            for (var i = 0; i <= num; i++) {
                context.beginPath();
                var rand_x = Math.random(i)
                var rand_y = Math.random(i)
                context.arc(rand_x, rand_y, radius, 0, 2 * Math.PI);
                context.fillStyle = color;
                context.fill();
                context.closePath();
            }
        }

        return (<canvas ref={canvasRef} width={30} height={30} />)
    }

    const options = {
        scrollwheel: false,
        minZoom: 2.4,
        maxZoom: 2.4,
        keyboardShortcuts: false,
        zoomControl: false,
        streetViewControl: false,
        fullscreenControl: false,
        draggable: false,
        styles: mapstyles,
    }

    return <div style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>

        <div>

            <div style={{ height: '100vh', width: '100vw', position: 'absolute', marginBottom: 84 }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: key }}
                    zoom={1}
                    options={options}
                    yesIWantToUseGoogleMapApiInternals
                    distanceToMouse={() => { return null }}
                    defaultCenter={{ lat: 0.0, lng: 0.0 }}
                >
                    {covidData.map(data => <AnyReactComponent
                        lat={data.location.lat}
                        lng={data.location.lng}
                        text={data.countryregion}
                        confirmed={data.confirmed}
                        deaths={data.deaths}
                        recovered={data.recovered}
                    />)}


                </GoogleMapReact>

            </div>
        </div>
        <NewsWidget />
        <CalendarWidget/>
        <BottomMenu
        data={getStatisticData()}
        />
    </div>
}