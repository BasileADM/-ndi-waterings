import "../styles/style.css"

export default function Home() {
    const logo = document.querySelector('.page1 .logo');
    const background = document.querySelector('.page1 .background');

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;

        const backgroundOffset = scrollY * 0.2;

        const scale_background = 1 + scrollY * 0.0001;
        const scale_logo = 1 + scrollY * 0.0005;
        const blur_background = Math.min(scrollY * 0.01, 20);
        const blur_logo = Math.min(scrollY * 0.01, 20);

        logo.style.transform = `translate(-50%, -50%) scale(${scale_logo})`;
        logo.style.filter = `blur(${blur_logo}px)`;
        background.style.transform = `translateY(${backgroundOffset}px) scale(${scale_background})`;
        background.style.filter = `blur(${blur_background}px)`;
    });



    return (
        <>
        <main>
        <div class="page1">
            <img class="background" src="src/assets/underwater-4286600_1280(1).jpg" alt=""/>
            <img class="logo"  src="src/assets/logo-bb7df86791.png"/>
        </div>
        <div class="page2"></div>
        <div class="page3"></div>
        </main>
        <div class="ia-button">
            <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="24" height="24"><path d="M24,12A12,12,0,1,1,12,0,12.013,12.013,0,0,1,24,12ZM14,12a2,2,0,0,0-2-2H10v2h2v7h2ZM12,5a1.5,1.5,0,1,0,1.5,1.5A1.5,1.5,0,0,0,12,5Z"/></svg>
            <p>Lancez l'IA</p>
        </div>
        </>
        
    )
}