import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import PropTypes from 'prop-types';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


export const GifItem = ({title, url}) => {
  
    return (
        <>
        <div className="card">
            <img src={url} alt="gif" />
            <p data-testid='test-title'>{title}</p>
            <label>
       <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
      <Checkbox
        {...label}
        icon={<BookmarkBorderIcon />}
        checkedIcon={<BookmarkIcon />} /></label>
        </div>
        </>
    )
}

GifItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired

}

GifItem.defaultProps = {
    title: 'Gif',
    url:'...'
}