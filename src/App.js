import explore from './assets/images/png/red-img.png'
import cardimg1 from './assets/images/png/cardimg-1.png'
import cardimg2 from './assets/images/png/cardimg-2.png'
import cardimg3 from './assets/images/png/cardimg_3.png'
import cardimg4 from './assets/images/png/cardimg-4.png'
import './App.css';
function App() {
  return (
    <div className="App">
      <div class="container">
        <div class="d_flex justify_content_center align_items_center">
          <h1 class="ff_hindi fs_36 fw_600 clr_black pb_45">Featured Product</h1>
        </div>
        <div class="row justify_content_center">
          <div class="col_xl_5 col_12 d_flex justify_content_center">
            <img src={explore} alt="red-img.png" className='w-100 h-100 border_radius_30 position_relative' />
            <p class="ff_hindi fs_md_58 fs_40 fw_600 clr_white position_absolute max_width_343 text_center text_shadow">Explore More
              Product</p>
          </div>
          <div class="col_xl_7 col_12">
            <div class="row justify_content_center align_items_center pt_52">
              <div class="col_md_6 col_12">
                <div class="img_card">
                  <img src={cardimg1} alt="red-img.png" className='w-100 border_radius_15' />
                  <p class="fs_16 fw_400 ff_open clr_black max_width_593 pt_22">Concetti Di-Lusso ALESANDRDO Luxury
                    Turkish Spa Towels and ganic Bamboo
                    Robes 12 PC set</p>
                  <div class="d_flex align_items_center justify_content_between pt_29">
                    <p class="fs_24 fw_600 ff_hindi clr_red">$169.99</p>
                    <p class="fs_16 fw_400 ff_hindi clr_grey">$199.99</p>
                    <a href='' class="ff_hindi fs_16 fw_600 clr_white text_nowrap text_uppercase add_btn">ADD CART</a>
                  </div>
                </div>
              </div>
              <div class="col_md_6 col_12 mt_51">
                <div class="img_card">
                  <img src={cardimg2} alt="red-img.png" className='w-100 border_radius_15 card-img' />
                  <p class="fs_16 fw_400 ff_open clr_black max_width_593 pt_22">Concetti Di-Lusso ALESANDRDO Luxury
                    Turkish Spa Towels and ganic Bamboo
                    Robes 12 PC set</p>
                  <div class="d_flex align_items_center justify_content_between pt_29">
                    <p class="fs_24 fw_600 ff_hindi clr_red">$169.99</p>
                    <p class="fs_16 fw_400 ff_hindi clr_grey">$199.99</p>
                    <a href='' class="ff_hindi fs_16 fw_600 clr_white text_nowrap text_uppercase add_btn">ADD CART</a>
                  </div>
                </div>
              </div>
              <div class="col_md_6 col_12 mt_50">
                <div class="img_card">
                  <img src={cardimg3} alt="red-img.png" className='w-100 border_radius_15 card-img' />
                  <p class="fs_16 fw_400 ff_open clr_black max_width_593 pt_22">Concetti Di-Lusso Luxury 100% Turkish
                    Bamboo Shawl Spa Robe in Premium
                    Gift Box</p>
                  <div class="d_flex align_items_center justify_content_between pt_29">
                    <p class="fs_24 fw_600 ff_hindi clr_red">$169.99</p>
                    <p class="fs_16 fw_400 ff_hindi clr_grey">$199.99</p>
                    <a href='' class="ff_hindi fs_16 fw_600 clr_white text_nowrap text_uppercase add_btn">ADD CART</a>
                  </div>
                </div>
              </div>
              <div class="col_md_6 col_12 mt_50">
                <div class="img_card">
                  <img src={cardimg4} alt="red-img.png" className='w-100 border_radius_15' />
                  <p class="fs_16 fw_400 ff_open clr_black max_width_593 pt_22">Concetti Di-Lusso ANNA Luxury 100%
                    Turkish Organic Cotton VIP Spa
                    Robe/Towels 10 PC Set </p>
                  <div class="d_flex align_items_center justify_content_between pt_29">
                    <p class="fs_24 fw_600 ff_hindi clr_red">$169.99</p>
                    <p class="fs_16 fw_400 ff_hindi clr_grey">$199.99</p>
                    <a href='' class="ff_hindi fs_16 fw_600 clr_white text_nowrap text_uppercase add_btn">ADD CART</a>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
        <div class="d_flex justify_content_center align_items_center pt_50 pt_xl_89">
          <button class="clr_white show_button fs_18 fw_600 ff_hindi">SHOW MORE</button>
          </div>
      </div>

    </div>
  );
}

export default App;
