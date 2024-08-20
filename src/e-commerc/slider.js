import './slide.css'
function Slider(){
    return(
        <>
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
    <img src="https://th.bing.com/th/id/R.b4d03b9a5d56ff957585d79bd6856d1d?rik=f9KC5BvdoZgT1A&pid=ImgRaw&r=0" className=" img d-block  w-100" alt="..."/>
    </div>
    <div className="carousel-item">
    <img src="https://th.bing.com/th/id/R.b4d03b9a5d56ff957585d79bd6856d1d?rik=f9KC5BvdoZgT1A&pid=ImgRaw&r=0" className="  imgd-block  w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://th.bing.com/th/id/R.b4d03b9a5d56ff957585d79bd6856d1d?rik=f9KC5BvdoZgT1A&pid=ImgRaw&r=0" className="  imgd-block  w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        </>
    )
}
export default Slider;