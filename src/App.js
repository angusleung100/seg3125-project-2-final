import { Routes, Route } from "react-router-dom";
import React, { useMemo, useState } from "react";
import { Container, Input, Spacer, Table } from "@nextui-org/react";
import { useTranslation } from 'react-i18next';

import { columns, rows } from "./search";


import './App.css';

function App() {


  const { t, i18n } = useTranslation(); 

  function changeToEN(e) {
    i18n.changeLanguage("en");
    localStorage.setItem("lang", "en");
  }

  function changeToCT(e) {
    i18n.changeLanguage("ct");
    localStorage.setItem("lang", "ct");
  }

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
                    <a class="nav-link"href="/history">{t('ourhistory')}</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/holdings">{t('holdings')}</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/services">{t('services')}</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/insights">{t('insights')}</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/team">{t('team')}</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/contact">{t('contact')}</a>
                  </li>
                </ul>
                <li class="d-flex nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    EN
                  </a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#" onClick={changeToEN}>EN</a></li>
                    <li><a class="dropdown-item" href="#" onClick={changeToCT}>中 (繁)</a></li>
                  </ul>
                </li>
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

            {/* Sample articles */}
            <Route path="article/2023/06/18/US-Treasury-Uneasy-About-Debt-Ceiling" element={<ArticleOne />} />
            <Route path="article/2023/06/18/Storms-Destroy-City-In-American-Samoa" element={<ArticleTwo />} />
            <Route path="article/2023/06/17/Money-Rains-Down-On-Stock-Exchange-As" element={<ArticleThree />} />

            <Route path="success" element={<Success />} />

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

  const { t, i18n } = useTranslation(); 

  return(
    <div>
      <div class="row">
        <div class="col-12">
          <div class="jumbotron">
            <h2>{t('landingh2')}</h2>
            <h5>{t('landingh5')}</h5>
            <br/>
            <a href="/services"><button type="button" class="btn btn-light">{t('becomeaclient')}</button></a>
          </div>
        </div>
        
      </div>

      <div class="row">
        <div class="col-12">
          <img id="landing-image" src={require('./images/DSC00506.JPG')} alt={t('altlandingimg')} />
        </div>
        
      </div>
      
      <div class="row">
        <div class="col-4">
          <div class="card h-100">
            <div class="card-body">
              <h1>{t('400millionusd')}</h1>
              <p>{t('aum')}</p>
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="card h-100">
            <div class="card-body">
              <h1>{t('5offices')}</h1>
              <p>{t('across3continents')}</p>
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="card  h-100">
            <div class="card-body">
              <h1>{t('117years')}</h1>
              <p>{t('worthofhistory')}</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

function History() {

  const { t, i18n } = useTranslation(); 

  return(
    <div>
      <div class="row">
        <div class="col-12">
          <h1>{t('ourhistory')}</h1>
          <h3>{t('founding')}</h3>
          <p>
          {t('foundingstoryp1')}
          </p>
          <p>
          {t('foundingstoryp2')}
          </p>
          <h3>{t('missionstatement')}</h3>
          <p>
          {t('foundingstoryp3')}
          </p>
          <img src={require('./images/court.jpg')} alt={t('althistoryimg')} height="200" />
        </div>
        
      </div>
      

    </div>
  );
}

function Services() {

  const { t, i18n } = useTranslation(); 

  return(
    <div>
      <div class="row">
        <div class="col-12">
          <h1>{t('services')}</h1>

          <h3>{t('financialmanagement')}</h3>
          <p>
          {t('servicesp1')}
          </p>
          <img src={require('./images/IMG_3914.JPG')} alt={t('altservicesimg1')} width="400" />
          <br /><br />
          <h3>{t('venturecapital')}</h3>
          <p>
          {t('servicesp2')}
          </p>
          <img src={require('./images/IMG_2764.JPG')} alt={t('altservicesimg2')} width="400" />
          <br/>
          <br/>
          <hr />
          <h3>{t('wanttobeaclient')}</h3>
          <form action="/success" class="col-4">
            <label>{t('name')}:</label>
            <input type="text" class="form-control"/>
            <label>{t('email')}:</label>
            <input type="email" class="form-control"/>
            <label>{t('phoneno')}:</label>
            <input type="text" class="form-control"/>
            <label>{t('interestedservices')}:</label>
            <select class="form-select">
              <option>{t('financialmanagement')}</option>
              <option>{t('venturecapital')}</option>
            </select>
            <label>{t('message')}:</label>
            <textarea class="form-control"/>
            <br/>
            <input type="submit" value={t('sendinquiry')} class="btn btn-secondary" onclick="response()"/>
          </form>
        </div>
        
      </div>
      

    </div>
  );
}

function Success() {

  const { t, i18n } = useTranslation(); 

  return(
    <div>
      <div class="row">
        <div class="col-12">
          <h1>{t('successsent')}</h1>
          <p>{t('successmessage')}</p>
          <br />
          <a href="/services">{t('successgoback')}</a>
        </div>
        
      </div>
      

    </div>
  );
}

function Holdings() {

  const { t } = useTranslation(); 
  
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
              <td>$133.63 million</td>
              <td>33.41%</td>
            </tr>
            <tr>  
              <td>2021</td>
              <td>$82.30 million</td>
              <td>20.58%</td>
            </tr>
            <tr>  
              <td>2020</td>
              <td>$51.06 million</td>
              <td>12.77%</td>
            </tr>
            <tr>  
              <td>2019</td>
              <td>$100.89 million</td>
              <td>25.22%</td>
            </tr>
          </table>
          <a href="/hkhi-historical-performance.pdf">Historical Fund Performance (All Time) &#62;&#62;</a>
        </div>


      </div>
      

    </div>
  );
}

function Insights() {

  
  
  // Referenced from FranciscoMendes10866's tutorial at
  // https://dev.to/franciscomendes10866/react-basic-search-filter-1fkh
  const [searchTerm, setSearchTerm] = useState("");

  const filteredRows = useMemo(() => {
    if (!searchTerm) return rows;

    if (rows.length > 0) {
      const attributes = Object.keys(rows[0]);

      const filteredArticles = [];

      for (const current of rows) {
        for (const attribute of attributes) {
          if (attribute === "key") {
            continue;
          }
          const value = current[attribute];
          if (value.includes(searchTerm)) {
            const matched = rows.find((row) => row.key === current.key);
            if (matched) {
              filteredArticles.push(matched);
            }
          }
        }
      }
      return filteredArticles;
    }

    return [];
  }, [searchTerm, rows]);

  const filterAPAC = () =>  {
    document.getElementById("searchbar").value = "Asia Pacific Markets";
    setSearchTerm("Asia Pacific Markets")
  }
  const filterMENA = () =>  {
    document.getElementById("searchbar").value = "Middle East North Africa Markets";
    setSearchTerm("Middle East North Africa Markets")
  }

  const filterNA = () =>  {
    document.getElementById("searchbar").value = "North America Markets";
    setSearchTerm("North America Markets")
  }

  const filterSA = () =>  {
    document.getElementById("searchbar").value = "South America Markets";
    setSearchTerm("South America Markets")
  }

  const filterEU = () =>  {
    document.getElementById("searchbar").value = "European Markets";
    setSearchTerm("European Markets")
  }

  const filterMESA = () =>  {
    document.getElementById("searchbar").value = "East South African Markets";
    setSearchTerm("East South African Markets")
  }

  return(
    <div>

      <div class="row">
        <div class="col-6">
          <h1>Insights</h1>
          <form id="filters">
            <label><b><u>Filter By Market:</u></b> </label>
            <input type="radio" onChange={filterAPAC} />
            <label>Asia Pacific (APAC)</label>
            <input type="radio"/>
            <label>Middle-East North Africa (MENA)</label>
            <input type="radio"/>
            <label>North America (NA)</label>
            <input type="radio"/>
            <label>South America (SA)</label>
            <input type="radio"/>
            <label>Europe (EU)</label>
            <input type="radio"/>
            <label>Southern Africa (MESA)</label>

            <br/>

            <label><b><u>Filter By Topic:</u></b> </label>
            <input type="radio"/>
            <label>Economy</label>
            <input type="radio"/>
            <label>Politics</label>
            <input type="radio"/>
            <label>Commodities</label>
            <input type="radio"/>
            <label>Bonds</label>
            <input type="radio"/>
            <label>Stocks</label>
            <input type="radio"/>
            <label>Lifestyle</label>
          </form>
        </div>
        <div class="col-6 d-flex justify-content-end">
          <h1></h1>
          <form id="filters">
            <Input id="searchbar" placeholder="Search Article..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            
          </form>
        </div>
      </div>

      <div class="row">
        <div class="col-12">
          <Table class="table table-bordered">
            <Table.Header>
              {columns.map((column) =>  (
                <Table.Column key={column.key}>{column.label}</Table.Column>               
              ))}
            </Table.Header>
              
            <Table.Body>
              {filteredRows.map((row) =>  (
                <Table.Row key={row.key}>
                  <Table.Cell><a href={row.link}>{row.title}</a></Table.Cell>
                  <Table.Cell>{row.date}</Table.Cell>
                  <Table.Cell>{row.author}</Table.Cell>
                  <Table.Cell>{row.tags}</Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
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

// Articles

function ArticleOne() {
  return(
    <div>
      <div class="row">
        <div class="col-12">
          <h1>US Treasury Uneasy About Debt Ceiling</h1>
          <h4>Author: H.K. Leong</h4>
          <hr/>
          <p>The US and possibly world economy was on the brink of devastation just several weeks ago with the US Treasury announcing the United States debt ceiling was close to being reached.
            Due to the importance of the United States in world economics and as a global trading partner, this was deeply concerning for economists all around the world hoping a deal would be struck.
          </p>
          <p>
            Republicans and Democrats ended up coming to a deal that would raise the debt ceiling and keep the world economy running.
          </p>
          <p>
            This only delays the inevitable. Without the United States putting forward a plan to pay down the debt, a raise of the debt ceiling each year would eventually make investors lose faith in the
            laws of economics and see the United States as a country that simply "prints" it's way out of trouble with US dollars and bonds.
          </p>
        </div>
        
      </div>
      

    </div>
  );
}

function ArticleTwo() {
  return(
    <div>
      <div class="row">
        <div class="col-12">
          <h1>Storms Destroy City in American Samoa</h1>
          <h4>Author: H.K. Leong</h4>
          <hr/>
          <p>Just last weekend, an island in American Samoa was hit by a tropical storm that decimated houses and fisheries along its coastline. As a city focused on tourism, this was a blow
            to the local economy, with tourists hesitant on continuing their trips as the storms rage on throughout The Pacific. The territory is a hotspot for tourists and have been very successful
            in attracting business for international tour and cruise companies. 
          </p>
          <p>The local government has stated that repairs will be underway and to hope for the best in such a dire situation as first aid and recovery efforts are stretched thin.</p>
          <p>At HKHI, we are bearish on the tour and cruise companies as the American Samoa packages for these companies are very successful and would be a big hit to their profits.</p>
        </div>
        
      </div>
      

    </div>
  );
}

function ArticleThree() {
  return(
    <div>
      <div class="row">
        <div class="col-12">
          <h1>Money Rains Down On Stock Exchange As Citizens Pour Useless Inflated Currency As Demonstrations Rise</h1>
          <h4>Author: A. Bort</h4>
          <hr/>
          <p>At the start of trading hours on Monday, thousands of demonstrators took to the streets of the financial district of a Venezuelan city
            and threw thousands of worthless paper bills on the ground and set fire to the stock exchange to protest the poor economic conditions of
            the country. Riot police were deployed, as well as officers the secret police to silence the demonstrations.
          </p>
          <p>
            Due to the lack of economic growth, the equipment for the local oil reserves were not being used to their full capacity and resulted in
            a depression among the South American countries. There is no indication when the stability will be returning. However, this is similar to
            the situation in Hong Kong when secret police were deployed to investigate protestors and dissuade civil unrest during the economic crackdown
            on excessive waste of food.
          </p>
        </div>
        
      </div>
      

    </div>
  );
}


export default App;
