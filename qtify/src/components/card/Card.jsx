import React from 'react';
import { Tooltip, Chip, colors } from '@mui/material';
import { Link } from 'react-router-dom';
import styles from './Card.module.css';

const Card = ({ data, type }) => {
  const getCard = (type) => {
    switch (type) {
      case "album": {
        const { image, follows, title, slug, songs } = data;
        return (
          <div className={styles.cardWrapper}>
            <Tooltip title={`${songs.length} songs`} placement='top' arrow>
              <Link to={`/album/${slug}`}>
                <div className={styles.card}>
                  <div className={styles.cardImg}>
                    <img src={image} alt="album" loading='lazy' />
                  </div>
                  <div className={styles.cardInfo}>
                    <Chip label={`${follows} follows`} size='small' className={styles.cardFollowers} />
                  </div>
                </div>
              </Link>
            </Tooltip>
            <div style={{ color: "white", marginTop: "15px", marginLeft: "10px" }} className={styles.cardTitleContainer}>
              <div style={{ maxWidth: 200, overflow: 'wrap', whiteSpace: 'normal', textOverflow: 'ellipsis' }} className={styles.cardTitle}>
                {title}
              </div>
            </div>
          </div>
        );
      }
      case "song": {
        const { image, likes, title } = data;
        return (
          <div className={styles.cardWrapper}>
            <div className={styles.card}>
              <div className={styles.cardImg}>
                <img src={image} alt="song" loading="lazy" />
              </div>
              <div className={styles.cardInfo}>
                <div className={styles.cardFollowers}>{likes} Likes</div>
              </div>
            </div>
            <div style={{ color: "white", marginTop: "15px", marginLeft: "10px" }} className={styles.cardTitleContainer}>
              <div style={{ maxWidth: 200, overflow: 'wrap', whiteSpace: 'normal', textOverflow: 'ellipsis' }} className={styles.cardTitle}>{title}</div>
            </div>
          </div>
        );
      }
      default:
        return <></>;
    }
  };

  return getCard(type);
};

export default Card;