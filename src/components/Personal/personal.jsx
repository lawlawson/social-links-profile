import './personal.css';

const personal = () => {
  return (
    <div className='personal-info-container'>
      <div className='image-container'>
        <img src='/public/assets/headshot.jpg' alt='profile picture' />
      </div>
      <div className='text-container'>
        <h1>Jessica Randall</h1>
        <p className='location-info'>London, United Kingdom</p>
        <p>&quot;Front-end Developer and avid reader.&quot;</p>
      </div>
    </div>
  );
};

export default personal;
