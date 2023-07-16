import { Routes, Route, Outlet, Link } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className='wrapper'>


        <div className="App">
          <header className="App-header">
          <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
              <a class="navbar-brand" href="/">HKHI</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a class="nav-link"href="/history">Our History</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/holdings">Holdings</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/services">Services</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/insights">Insights</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/team">Team</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/contact">Contact</a>
                  </li>
                </ul>
                <a class="d-flex nav-link"href="#">EN</a>
              </div>
          </div>
    </nav>
          </header>
    
    <body>
      <Routes>
            <Route index element={<Landing />} />
            <Route path="history" element={<History />} />
            <Route path="holdings" element={<Holdings />} />
            <Route path="services" element={<Services />} />
            <Route path="insights" element={<Insights />} />
            <Route path="team" element={<Team />} />
            <Route path="contact" element={<Contact />} />

            {/* Using path="*"" means "match anything", so this route
                  acts like a catch-all for URLs that we don't have explicit
                  routes for. */}
            <Route path="*" element={<Nonexistent />} />
        </Routes>

        
    </body>
    
        </div>
    


    </div>

   
  );
}

function Landing() {
  return(
    <div>
      <div class="row">
        <div class="col-12">
          <div class="jumbotron">
            <h2>Unlock the potential of the Asia-Pacific Markets</h2>
            <h5>From Hong Kong to London, from Johannesburg to New Delhi, let us help you reach your investing goals.</h5>
            <br/>
            <a href="/services"><button type="button" class="btn btn-light">Become A Client</button></a>
          </div>
        </div>
        
      </div>

      <div class="row">
        <div class="col-12">
          <img id="landing-image" src={require('./images/DSC00506.JPG')} alt="Financial Building" />
        </div>
        
      </div>
      
      <div class="row">
        <div class="col-4">
          <div class="card h-100">
            <div class="card-body">
              <h1>$400+ Million USD</h1>
              <p>Assets Under Management</p>
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="card h-100">
            <div class="card-body">
              <h1>5 Offices</h1>
              <p>Across 3 Continents</p>
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="card  h-100">
            <div class="card-body">
              <h1>117 Years</h1>
              <p>Worth Of Company History</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

function History() {
  return(
    <div>
      <div class="row">
        <div class="col-12">
          <h1>Our History</h1>
          <h3>Founding</h3>
          <p>In 1905, an English merchantg docked in Hong Kong and could not find a bank to finance his ventures. Realizing this, he and a group of like-minded merchants established
            the Hong Kong Harbour Trading Company. Years went by and as wars were won and lost, the economies of The East went up and down. The mid 1900s saw an economic boom in Asia
            and seeing this opportunity, the Hong Kong Harbour Trading Company pivoted and become the Hong Kong Harbour Investment Group.
          </p>
          <p>
            Over the years, it grew from a group of merchants to a company of 500+ employees strong, with regional offices across 3 continents in the former British Empire.
          </p>
          <h3>Mission Statement</h3>
          <p>Despite being an investment fiorm, we strive to make choices that positively impact the economic conditions of countries we invest and operate in. We work closely with
            humanitarian organizations to improve the lives of the impoverished with yearly donations to these organizations from our profits and investing in infrastructure in these nations.
          </p>
          <img src={require('./images/court.jpg')} alt="Picture of an old colonial building in Hong Kong. The court." height="200" />
        </div>
        
      </div>
      

    </div>
  );
}

function Services() {
  return(
    <div>
      <div class="row">
        <div class="col-12">
          <h1>Services</h1>

          <h3>Financial Management</h3>
          <p>
            Our world-class financial analysts and trading team will help you grow your money with investments across different sectors and asset classes. With us at the helm, you know your funds and future are safe.
          </p>
          <img src={require('./images/IMG_3914.JPG')} alt="Picture of Montreal skyline" width="400" />
          <br /><br />
          <h3>Venture Capital</h3>
          <p>Interested in seed funding or investing in the next big thing? We can connect startupos and potential investors together with the same goal in mind: Succeeding. As an investor, we do all the due diligence for you.
            As a startup, we guide you through the pitch process.
          </p>
          <img src={require('./images/IMG_2764.JPG')} alt="Picture of a busy shop street in Ueno, Tokyo" width="400" />
          <br/>
          <br/>

          <h3>Want to be a client?</h3>
          <form class="col-4">
            <label>Name:</label>
            <input type="text" class="form-control"/>

            <label>Interested Services:</label>
            <select class="form-select">
              <option>Financial Management</option>
              <option>Venture Capital</option>
            </select>
            <label>Message:</label>
            <textarea class="form-control"/>
            <br/>
            <input type="submit" value="Send Inquiry" class="btn btn-secondary"/>
          </form>

        </div>
        
      </div>
      

    </div>
  );
}

function Holdings() {
  return(
    <div>
      <div class="row">
        <div class="col-12">
          <h1>Holdings</h1>
        </div>
      </div>

      <div class="row">
        <div class="col-6">
          <h3>Real Estate</h3>
          <table class="table table-bordered table-hover">
            <tr>
              <th>Asset</th>
              <th>Quantity</th>
            </tr>
            <tr><td>Sentosa Mall (SG)</td><td>1</td></tr>
            <tr><td>Canary Wharf Apartment Complex (UK)</td><td>1</td></tr>
            <tr><td>Shanghai Bund Hotel (CN)</td><td>1</td></tr>
          </table>
          <br/>
          <h3>Securities</h3>
          <table class="table table-bordered table-hover">
            <tr>
              <th>Asset</th>
              <th>Weight (%)</th>
            </tr>
            <tr><td>Established APAC Markets</td><td>60%</td></tr>
            <tr><td>Emerging Markets</td><td>20%</td></tr>
            <tr><td>China Markets</td><td>20%</td></tr>
          </table>
        </div>

        <div class="col-6">
          <h3>Historical Fund Performance</h3>
          <table class="table table-bordered table-hover">
            <tr>
              <th>Year</th>
              <th>P/L ($USD)</th>
              <th>P/L (%)</th>
            </tr>
            <tr>  
              <td>2022</td>
              <td>$4.00 million</td>
              <td>1.00%</td>
            </tr>
            <tr>  
              <td>2021</td>
              <td>$10.00 million</td>
              <td>2.50%</td>
            </tr>
            <tr>  
              <td>2020</td>
              <td>$40.00 million</td>
              <td>10.00%</td>
            </tr>
            <tr>  
              <td>2019</td>
              <td>$25.00 million</td>
              <td>6.25%</td>
            </tr>
          </table>
          <a href="/hkhi-historical-performance.pdf">Historical Fund Performance (All Time) &#62;&#62;</a>
        </div>


      </div>
      

    </div>
  );
}

function Insights() {
  return(
    <div>
      <div class="row">
        <div class="col-6">
          <h1>Insights</h1>
          <form id="filters">
            <label><b><u>Filter By Market:</u></b> </label>
            <input type="checkbox"/>
            <label>APAC</label>
            <input type="checkbox"/>
            <label>ME</label>
            <input type="checkbox"/>
            <label>NA</label>
            <input type="checkbox"/>
            <label>SA</label>
            <input type="checkbox"/>
            <label>EU</label>
            <input type="checkbox"/>
            <label>AF</label>

            <br/>

            <label><b><u>Filter By Topic:</u></b> </label>
            <input type="checkbox"/>
            <label>Economy</label>
            <input type="checkbox"/>
            <label>Politics</label>
            <input type="checkbox"/>
            <label>Commodities</label>
            <input type="checkbox"/>
            <label>Bonds</label>
            <input type="checkbox"/>
            <label>Stocks</label>
            <input type="checkbox"/>
            <label>Lifestyle</label>
          </form>
        </div>
        <div class="col-6 d-flex justify-content-end">
          <h1></h1>
          <form id="filters">
            <input type="text" placeholder="Search Article..."/>
            <input type="submit" value="Search"/>
            
          </form>
        </div>
      </div>

      <div class="row">
        <div class="col-12">
          <table class="table table-bordered">
            <thead>
              <tr>
                <th>Article Name</th>
                <th>Published Date</th>
                <th>Author</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><a href="#">US Treasury Uneasy About Debt Ceiling</a></td>
                <td>Jun 18 2023</td>
                <td>H.K. Leong</td>
              </tr>
              <tr>
                <td><a href="#">Storms Destroy City in American Samoa</a></td>
                <td>Jun 18 2023</td>
                <td>H.K. Leong</td>
              </tr>
              <tr>
                <td><a href="#">Money Rains Down On Stock Exchange As Citizens Pour Useless Inflated Currency As Demonstrations Rise</a></td>
                <td>Jun 17 2023</td>
                <td>A. Bort</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function Team() {
  return(
    <div>
      <div class="row">
        <div class="col-12">
          <h1>Team</h1>
          <table id="team">
            <tr>
              <td>
                <tr>
                  <td><img src={require('./images/profiles/blank.png')} height="200" width="200" alt="Blank profile placeholder"></img></td>
                  <td>
                    <p>
                      <b>Terrance Edward Laurence</b><br/>
                      President and Chairman
                    </p>
                  </td>
                </tr>
              </td>
              <td>
                <tr>
                  <td><img src={require('./images/profiles/blank.png')} height="200" width="200" alt="Blank profile placeholder"></img></td>
                  <td>
                    <p>
                      <b>Mike Hunt</b><br/>
                      VP of South-East Asia Markets
                    </p>
                  </td>
                </tr>
              </td>
              
            </tr>

            <tr>
              <td>
                <tr>
                  <td><img src={require('./images/profiles/blank.png')} height="200" width="200" alt="Blank profile placeholder"></img></td>
                  <td>
                    <p>
                      <b>Ho Lee Fook</b><br/>
                      VP of Venture Capital
                    </p>
                  </td>
                </tr>
              </td>
              <td>
                <tr>
                  <td><img src={require('./images/profiles/blank.png')} height="200" width="200" alt="Blank profile placeholder"></img></td>
                  <td>
                    <p>
                      <b>Xiao Yu Zhang</b><br/>
                      VP of China Markets
                    </p>
                  </td>
                </tr>
              </td>
              
            </tr>

            <tr>
              <td>
                <tr>
                  <td><img src={require('./images/profiles/blank.png')} height="200" width="200" alt="Blank profile placeholder"></img></td>
                  <td>
                    <p>
                      <b>Travis Carnegie</b><br/>
                      VP of Investments
                    </p>
                  </td>
                </tr>
              </td>
              <td>
                <tr>
                  <td><img src={require('./images/profiles/blank.png')} height="200" width="200" alt="Blank profile placeholder"></img></td>
                  <td>
                    <p>
                      <b>Hadrian Lawson</b><br/>
                      VP of Middle-East Markets
                    </p>
                  </td>
                </tr>
              </td>
              
            </tr>

          </table>

        </div>
        
      </div>
      

    </div>
  );
}

function Contact() {
  return(
    <div>
      <div class="row">
        <div class="col-12">
          <h3>Offices</h3>
          <table id="locations">
            <tr>
              <td>
                <p>
                  <b>Hong Kong (Headquarters)</b><br/>
                  111 Queen's Road Central<br/>
                  Hong Kong, Hong Kong
                  <br/>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
</svg> : 852 5555 4444<br />
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
</svg> : hk@hkhi.com<br />
                </p>
              </td>
              <td>
                <p>
                  <b>Toronto</b><br/>
                  145 Bay Street<br/>
                  Toronto, Ontario, Canada
                  <br/>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
</svg> : 416 555 1616<br />
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
</svg> : toronto@hkhi.com<br />
                </p>
              </td>
              <td>
                <p>
                  <b>Shanghai</b><br/>
                  22 Zhongshan Dongyilu<br/>
                  Shanghai, China
                  <br/>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
</svg> : 21 1222 5555<br />
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
</svg> : shanghai@hkhi.com<br />
                </p>
              </td>
            </tr>

            <tr>
              <td>
                <p>
                  <b>London</b><br/>
                  Unit 2 Canada Square<br/>
                  London, United Kingdom
                  <br/>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
</svg> : 44 345 456 7894<br />
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
</svg> : london@hkhi.com<br />
                </p>
              </td>
              <td>
                <p>
                  <b>Singapore</b><br/>
                  12 Bayfront Ave<br/>
                  Singapore
                  <br/>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
</svg> : 65 1234 5648<br />
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
</svg> : singapore@hkhi.com<br />
                </p>
              </td>
              <td>
                <p>
                  <b>Johannesburg</b><br/>
                  Coming Soon
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <p>
                  <b>Melbourne</b><br/>
                  Coming Soon<br/>

                </p>
              </td>
              <td>
                <p>
                  <b>New Delhi</b><br/>
                  Coming Soon<br/>
                </p>
              </td>
              <td>
                
              </td>
            </tr>
          </table>

          <h3>Company Registration</h3>
          Hong Kong Harbour Investments Ltd. is a registered company in the Hong Kong SAR in the People's Republic of China. Registration Number: 123123123123
        </div>
        
      </div>
      

    </div>
  );
}

function Nonexistent() {
  return(
    <div>
      <div class="row">
        <div class="col-12">
          <h1>This page does not exist :3</h1>

          <p>
            <a href="/">Click here to go to the home page</a>
          </p>
        </div>
        
      </div>
      

    </div>
  );
}

export default App;
