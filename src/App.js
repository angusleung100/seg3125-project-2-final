import { Routes, Route, Outlet, Link } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className='wrapper'>


        <div className="App">
          <header className="App-header">
          <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
              <a class="navbar-brand" href="https://angusleung100.github.io/seg3125-project-2/">HKHI</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a class="nav-link"href="https://angusleung100.github.io/seg3125-project-2/#/history">Our History</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="https://angusleung100.github.io/seg3125-project-2/#/holdings">Holdings</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="https://angusleung100.github.io/seg3125-project-2/#/services">Services</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="https://angusleung100.github.io/seg3125-project-2/#/insights">Insights</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="https://angusleung100.github.io/seg3125-project-2/#/team">Team</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="https://angusleung100.github.io/seg3125-project-2/#/contact">Contact</a>
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
            <Route path="/history" element={<History />} />
            <Route path="/holdings" element={<Holdings />} />
            <Route path="/services" element={<Services />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />

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
            <a href="https://angusleung100.github.io/seg3125-project-2/#/services"><button type="button" class="btn btn-light">Become A Client</button></a>
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
          <img src={require('https://live.staticflickr.com/4124/5099605109_bd04b3c786_b.jpg')} alt="Picture of financial building" height="200" />
          <p class="attribution">"<a target="_blank" rel="noopener noreferrer" href="https://www.flickr.com/photos/37387065@N05/5099605109">Analyzing Financial Data</a>" by <a target="_blank" rel="noopener noreferrer" href="https://www.flickr.com/photos/37387065@N05">Dave Dugdale</a> is licensed under <a target="_blank" rel="noopener noreferrer" href="https://creativecommons.org/licenses/by-sa/2.0/?ref=openverse">CC BY-SA 2.0 <img src="https://mirrors.creativecommons.org/presskit/icons/cc.svg" style="height: 1em; margin-right: 0.125em; display: inline;"></img><img src="https://mirrors.creativecommons.org/presskit/icons/by.svg" style="height: 1em; margin-right: 0.125em; display: inline;"></img><img src="https://mirrors.creativecommons.org/presskit/icons/sa.svg" style="height: 1em; margin-right: 0.125em; display: inline;"></img></a>. </p>
          <h3>Venture Capital</h3>
          <p>Interested in seed funding or investing in the next big thing? We can connect startupos and potential investors together with the same goal in mind: Succeeding. As an investor, we do all the due diligence for you.
            As a startup, we guide you through the pitch process.
          </p>
          <img src={require('./images/DSC00506.JPG')} alt="Picture of financial building in Ottawa, Canada" height="200" />
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
          <a href="#">Historical Fund Performance (All Time) &#62;&#62;</a>
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
                  <td><img src={require('./images/court.jpg')} height="200" width="200"></img></td>
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
                  <td><img src={require('./images/court.jpg')} height="200" width="200"></img></td>
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
                  <td><img src={require('./images/court.jpg')} height="200" width="200"></img></td>
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
                  <td><img src={require('./images/court.jpg')} height="200" width="200"></img></td>
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
                  <td><img src={require('./images/court.jpg')} height="200" width="200"></img></td>
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
                  <td><img src={require('./images/court.jpg')} height="200" width="200"></img></td>
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
                  <u>Phone:</u> 852 5555 4444<br />
                  <u>Email:</u> hk@hkhi.com<br />
                </p>
              </td>
              <td>
                <p>
                  <b>Toronto</b><br/>
                  145 Bay Street<br/>
                  Toronto, Ontario, Canada
                  <br/>
                  <u>Phone:</u> 416 555 1616<br />
                  <u>Email:</u> toronto@hkhi.com<br />
                </p>
              </td>
              <td>
                <p>
                  <b>Shanghai</b><br/>
                  22 Zhongshan Dongyilu<br/>
                  Shanghai, China
                  <br/>
                  <u>Phone:</u> 21 1222 5555<br />
                  <u>Email:</u> shanghai@hkhi.com<br />
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
                  <u>Phone:</u> 44 345 456 7894<br />
                  <u>Email:</u> london@hkhi.com<br />
                </p>
              </td>
              <td>
                <p>
                  <b>Singapore</b><br/>
                  12 Bayfront Ave<br/>
                  Singapore
                  <br/>
                  <u>Phone:</u> 65 1234 5648<br />
                  <u>Email:</u> singapore@hkhi.com<br />
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
