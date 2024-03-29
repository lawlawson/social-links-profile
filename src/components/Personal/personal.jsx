import './personal.css';

const personal = () => {
  return (
    <div className='personal-info-container'>
      <div className='image-container'>
        <img src='/assets/headshot.jpg' alt='jessica randall' />
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
