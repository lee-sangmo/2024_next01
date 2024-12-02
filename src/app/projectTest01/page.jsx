import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Page() {
  return (
    <main>
      {/* 네비게이션 바 */}
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Carousel</a>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item">
                <a className="nav-link active" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled">Disabled</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* 캐러셀 섹션 */}
      <div id="myCarousel" className="carousel slide mb-6" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active"></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1"></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container">
              <div className="carousel-caption text-start">
                <h1>Example headline.</h1>
                <p>Some representative placeholder content for the first slide of the carousel.</p>
                <p><a className="btn btn-lg btn-primary" href="#">Sign up today</a></p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container">
              <div className="carousel-caption">
                <h1>Another example headline.</h1>
                <p>Some representative placeholder content for the second slide of the carousel.</p>
                <p><a className="btn btn-lg btn-primary" href="#">Learn more</a></p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container">
              <div className="carousel-caption text-end">
                <h1>One more for good measure.</h1>
                <p>Some representative placeholder content for the third slide of this carousel.</p>
                <p><a className="btn btn-lg btn-primary" href="#">Browse gallery</a></p>
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* 마케팅 메시지 섹션 */}
      <div className="container marketing">
        <div className="row">
          <div className="col-lg-4 text-center">
            <h2 className="fw-normal">Heading</h2>
            <p>Some representative placeholder content for the three columns of text below the carousel.</p>
            <p><a className="btn btn-secondary" href="#">View details &raquo;</a></p>
          </div>
          <div className="col-lg-4 text-center">
            <h2 className="fw-normal">Heading</h2>
            <p>Another exciting bit of representative placeholder content.</p>
            <p><a className="btn btn-secondary" href="#">View details &raquo;</a></p>
          </div>
          <div className="col-lg-4 text-center">
            <h2 className="fw-normal">Heading</h2>
            <p>And lastly this, the third column of representative placeholder content.</p>
            <p><a className="btn btn-secondary" href="#">View details &raquo;</a></p>
          </div>
        </div>
      </div>

      {/* 푸터 */}
      <footer className="container">
        <p className="float-end"><a href="#">Back to top</a></p>
        <p>&copy; 2017–2024 Company, Inc. &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>
      </footer>
    </main>
  );
}

export default Page;