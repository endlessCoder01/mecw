import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Articles from './components/Articles';
import ActionTips from './components/ActionTips';
import Newsletter from './components/Newsletter';
import Resources from './components/Resources';
import Testimonials from './components/Testimonials';
import Wildlife from './components/Wildlife';
import Footer from './components/Footer';
import Blog from './components/Blog';
import MainView from './components/main';
import FAQ from './components/FAQ';
import NewsPosts from './components/NewsPosts';
import CopyrightPage from './components/copyrights';
import CareersPage from './components/Careers';
import DonatePage from './components/Donate';
import ServicesPage from './components/Services';
import ContactUsPage from './components/Contact';
import GalleryPage from './components/gallery';
import WeatherHistory from './components/climate';


const App = () => {
  return (
    <ThemeProvider>
        <Router>
      <div className="min-h-screen bg-cream dark:bg-gray-900 transition-colors duration-300">
      <Routes>
                    <Route index element={<MainView />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/home" element={<MainView />} />
                     <Route path="/team" element={<GalleryPage />} />
                    <Route path="/faqs" element={<FAQ />} />
                    <Route path="/news" element={<NewsPosts />} />
                    <Route path="/copyrights" element={<CopyrightPage />} />
                    <Route path="/careers" element={<CareersPage />} />
                    <Route path="/donate" element={<DonatePage />} />
                    <Route path="/services" element={<ServicesPage />} />
                    <Route path="/contact" element={<ContactUsPage />} />
                    <Route path="/climate" element={<WeatherHistory />} />
                    {/* <Route path="/search" element={<SearchPage />} />
                   
                   
                    <Route path="/Reports" element={<Reports />} />
                    <Route path="/broadcast" element={<Broadcast />} />
                    <Route path="/analytics" element={<Analytics />} />
                    <Route path="/Admindash" element={<AdminDashboard />} />
                    <Route path="/verifyReg" element={<PendingReg />} />
                    <Route path="/searchTrip" element={<SearchTrip />} />
                    <Route path="/chatNow/:tripId" element={<CustomerAdminChat />} />
                    <Route path="/chatHome" element={<ChatHome />} />
                    <Route path="/feedback" element={<Feedback />} />
                    <Route path="/AddConfig" element={<AddConfig />} />
                    <Route path="/AppStatistics" element={<AppStatistics />} />
                    <Route path="/ViewConfig" element={<ViewConfig />} />
                    <Route path="/Configurations" element={<Configurations />} />
                    <Route path="/map" element={<MapView />} />
                    <Route path="/mapWithDriver" element={<MapViewWithDriver />} />
                    <Route path="/ReportAnalysis" element={<ReportAnalysis />} />



                    <Route path="/Home" element={<Home />} />
                    <Route path="/Confirmation" element={<Confirmation />} />
                    <Route path="/Map" element={<Map />} />
                    <Route path="/Maps" element={<Maps />} /> */}

                </Routes>
    

      </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;