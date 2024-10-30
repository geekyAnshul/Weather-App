import React from 'react';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';

const InfoBox = ({info}) => {
    const INIT_IMG = "https://png.pngtree.com/background/20230409/original/pngtree-clear-sky-white-clouds-blue-sky-background-picture-image_2375515.jpg";
   const HOT_URL = "https://mmnews.tv/wp-content/uploads/2020/05/heatwave-768x422-1.jpg";
   const COLD_URL = "https://getwallpapers.com/wallpaper/full/c/5/3/1173359-gorgerous-cold-weather-wallpaper-2560x1600-windows.jpg";
   const RAIN_URL = "https://www.hdwallpapers.in/download/falling_rain_drops_on_white_umbrella_hd_rain-HD.jpg";
   const SUNNY_URL = "https://www.masslive.com/resizer/RM_TjyWF-8MJmwHNv-IYPXxD6sw=/1280x0/smart/advancelocal-adapter-image-uploads.s3.amazonaws.com/image.masslive.com/home/mass-media/width2048/img/weather_impact/photo/clear-sky-483f5bddb1ba1dd0.jpg"
  return (
    <div >
          
           <div className='card'>
           <Card sx={{ width: 400 }}>
           
      <CardMedia
        sx={{ height: 200,objectFit: true }}
        image={info.humidity > 70 ? RAIN_URL : info.temp > 30 ? HOT_URL : info.temp < 15 ? COLD_URL : SUNNY_URL}
        title="Weather Images"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" >
          <div className='city'>{info.city}</div>
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component="span">
            <div className='text-base font-semibold mb-3 text-stone-700'>The Weather is {info.weatherDesc} and is about {info.feelsLike}</div>
          <div className='text-md  mb-1'><b>Temperature : </b>{info.temp}&deg;C</div>
          <div className='text-md  mb-1'><b>Maximum Temperature : </b>{info.tempMax}&deg;C</div>
          <div className='text-md  mb-1'><b>Minimum Temperature : </b>{info.tempMin}&deg;C</div>
          <div className='flex justify-between text-md  mb-1'>
            <span className='text-md  '><b>Sunrise : </b>{info.sunrise}</span>
            <span className='text-md '><b>Sunset :</b> {info.sunset}</span>
          </div>
          <div className='text-md  mb-1'><b>Humidity : </b>{info.humidity}</div>
          
        </Typography>
      </CardContent>
      
    </Card>
    </div>
    </div>
  )
}

export default InfoBox