import { Link, useNavigate } from 'react-router-dom'

const Footer = () => {

  const navigate = useNavigate()

  return (
    <footer>
      <div className="Foodle-footer">
        <h1>Foodle</h1> 
      </div>

      <div className='footer-socials'>
        <span>Created By:</span>
        
        <div className='creator-div'>
        <div className='footer-socials-icons'>
          <img 
            onClick={() => window.open('https://github.com/timmellis/','_blank')}
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png" 
            alt='github icon' 
          />
          <img 
            onClick={() => window.open('https://linkedin.com/in/tim-m-ellis/','_blank')}
            src="https://cdn-icons-png.flaticon.com/512/1384/1384014.png" 
            alt='linkedin icon' 
          />
          {/* <img 
            onClick={() => window.open('https://twitter.com/timmellis/','_blank')}
            src="https://cdn-icons-png.flaticon.com/512/1384/1384017.png" alt='twitter icon' 
          /> */}
          </div>
          <p>Tim E.</p>
        </div>

          <div className='creator-div'>
        <div className='footer-socials-icons'>
          <img 
            onClick={() => window.open('https://github.com/Neoj1sec142/','_blank')}
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png" 
            alt='github icon' 
          />
          <img 
            onClick={() => window.open('https://linkedin.com/in/markharmon142/','_blank')}
            src="https://cdn-icons-png.flaticon.com/512/1384/1384014.png" 
            alt='linkedin icon' 
          />
            </div>
          <p>Mark H.</p>
        </div>
        
        <div className='creator-div'>
          <div className='footer-socials-icons'>
            <img 
              onClick={() => window.open('https://github.com/joshgrainger22/','_blank')}
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png" 
              alt='github icon' 
            />
            <img 
            onClick={() => window.open('https://linkedin.com/in/joshua-grainger-5aa230229/','_blank')}
            src="https://cdn-icons-png.flaticon.com/512/1384/1384014.png" 
            alt='linkedin icon' 
          />
          </div>
          <p>Joshua G.</p>
        </div>

      </div>
    </footer>
  )
}

export default Footer