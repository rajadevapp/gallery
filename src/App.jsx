import { useState,useEffect } from 'react'
import './App.css'

function App() {
    
    const [visible, setVisible] = useState(0);
    const images = [
        '/asset/fw1.jpg',
        '/asset/fw2.jpg',
        '/asset/fw3.jpg',
        '/asset/fw4.jpg'
    ];
    const delay = 600;

    useEffect(() => {
        if (visible >= images.length) return;

        const t = setTimeout(() => {
            setVisible((v) => v + 1);
        }, visible === 0 ? 600 : delay);

        return () => clearTimeout(t);
    }, [visible, images.length, delay]);

    return (
        <section className="gallery-section">
            <div className="gallery-heading">
                <span>OUR CELEBRATIONS</span>
                <h1>Fireworks Gallery</h1>
                <p>Moments of light, colour and celebration.</p>
            </div>
            
            <div class="gallery-container">
                {images.map((src, i) => (
                    <div key={i}
                      className={`gallery-item ${i % 2 === 0 ? "left" : "right"} ${i < visible ? "show" : ""}`}>
                        <img src={src} alt="Fireworks celebration" />
                    </div>
                ))}
            </div>
        </section>
    );
}

export default App
