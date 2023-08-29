import WbSunnyIcon from '@mui/icons-material/WbSunny';
import CloudIcon from '@mui/icons-material/Cloud';
import FilterDramaIcon from '@mui/icons-material/FilterDrama';
import RainIcon from '@mui/icons-material/Grain'; // This icon can represent rain
import SnowIcon from '@mui/icons-material/AcUnit'; // This icon can represent snow
import ThunderstormIcon from '@mui/icons-material/FlashOn'; // This icon can represent thunderstorms
import MistIcon from '@mui/icons-material/BlurOn'; // This icon can represent mist or fog

export const weatherIcons: Record<string, JSX.Element> = {
  '01d': <WbSunnyIcon />,
  '01n': <WbSunnyIcon />,
  '02d': <FilterDramaIcon />,
  '02n': <FilterDramaIcon />,
  '03d': <CloudIcon />,
  '03n': <CloudIcon />,
  '04d': <CloudIcon />,
  '04n': <CloudIcon />,
  '09d': <RainIcon />,
  '09n': <RainIcon />,
  '10d': <RainIcon />,
  '10n': <RainIcon />,
  '11d': <ThunderstormIcon />,
  '11n': <ThunderstormIcon />,
  '13d': <SnowIcon />,
  '13n': <SnowIcon />,
  '50d': <MistIcon />,
  '50n': <MistIcon />,
};