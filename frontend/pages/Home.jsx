import "../styles/style.css"
import QuizCard from "./QuizCard";

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
            <div class="back-logo">
                <img class="background" src="src/assets/underwater-4286600_1280(1).jpg" alt=""/>
                <svg class="logo" xmlns="http://www.w3.org/2000/svg" width="1155" height="214" viewBox="0 0 1155 214" fill="none">
                    <path d="M13.682 124V34.4H50.546C58.482 34.4 65.266 35.68 70.898 38.24C76.6154 40.8 81.01 44.4693 84.082 49.248C87.154 54.0267 88.69 59.7013 88.69 66.272C88.69 72.8427 87.154 78.5173 84.082 83.296C81.01 87.9893 76.6154 91.616 70.898 94.176C65.266 96.6507 58.482 97.888 50.546 97.888H22.898L30.322 90.336V124H13.682ZM72.306 124L49.65 91.488H67.442L90.226 124H72.306ZM30.322 92.128L22.898 84.192H49.778C57.1167 84.192 62.6207 82.6133 66.29 79.456C70.0447 76.2987 71.922 71.904 71.922 66.272C71.922 60.5547 70.0447 56.16 66.29 53.088C62.6207 50.016 57.1167 48.48 49.778 48.48H22.898L30.322 40.288V92.128ZM89.515 124L129.835 34.4H146.219L186.667 124H169.259L134.571 43.232H141.227L106.667 124H89.515ZM108.075 103.264L112.555 90.208H160.939L165.419 103.264H108.075ZM233.164 125.28C226.337 125.28 219.98 124.171 214.092 121.952C208.289 119.648 203.212 116.448 198.86 112.352C194.593 108.171 191.265 103.264 188.876 97.632C186.487 92 185.292 85.856 185.292 79.2C185.292 72.544 186.487 66.4 188.876 60.768C191.265 55.136 194.636 50.272 198.988 46.176C203.34 41.9947 208.417 38.7947 214.22 36.576C220.023 34.272 226.38 33.12 233.292 33.12C240.631 33.12 247.329 34.4 253.388 36.96C259.447 39.4347 264.567 43.1467 268.748 48.096L257.996 58.208C254.753 54.7093 251.127 52.1067 247.116 50.4C243.105 48.608 238.753 47.712 234.06 47.712C229.367 47.712 225.057 48.48 221.132 50.016C217.292 51.552 213.921 53.728 211.02 56.544C208.204 59.36 205.985 62.688 204.364 66.528C202.828 70.368 202.06 74.592 202.06 79.2C202.06 83.808 202.828 88.032 204.364 91.872C205.985 95.712 208.204 99.04 211.02 101.856C213.921 104.672 217.292 106.848 221.132 108.384C225.057 109.92 229.367 110.688 234.06 110.688C238.753 110.688 243.105 109.835 247.116 108.128C251.127 106.336 254.753 103.648 257.996 100.064L268.748 110.304C264.567 115.168 259.447 118.88 253.388 121.44C247.329 124 240.588 125.28 233.164 125.28ZM294.932 71.648H339.476V85.344H294.932V71.648ZM296.212 110.048H346.772V124H279.572V34.4H344.98V48.352H296.212V110.048ZM405.689 75.616H450.361V89.696H405.689V75.616ZM407.097 124H390.457V34.4H455.865V48.352H407.097V124ZM507.821 125.28C500.824 125.28 494.381 124.128 488.493 121.824C482.605 119.52 477.485 116.32 473.133 112.224C468.781 108.043 465.41 103.179 463.021 97.632C460.632 92 459.437 85.856 459.437 79.2C459.437 72.544 460.632 66.4427 463.021 60.896C465.41 55.264 468.781 50.4 473.133 46.304C477.485 42.1227 482.605 38.88 488.493 36.576C494.381 34.272 500.781 33.12 507.693 33.12C514.69 33.12 521.09 34.272 526.893 36.576C532.781 38.88 537.901 42.1227 542.253 46.304C546.605 50.4 549.976 55.264 552.365 60.896C554.754 66.4427 555.949 72.544 555.949 79.2C555.949 85.856 554.754 92 552.365 97.632C549.976 103.264 546.605 108.128 542.253 112.224C537.901 116.32 532.781 119.52 526.893 121.824C521.09 124.128 514.733 125.28 507.821 125.28ZM507.693 110.688C512.216 110.688 516.397 109.92 520.237 108.384C524.077 106.848 527.405 104.672 530.221 101.856C533.037 98.9547 535.213 95.6267 536.749 91.872C538.37 88.032 539.181 83.808 539.181 79.2C539.181 74.592 538.37 70.4107 536.749 66.656C535.213 62.816 533.037 59.488 530.221 56.672C527.405 53.7707 524.077 51.552 520.237 50.016C516.397 48.48 512.216 47.712 507.693 47.712C503.17 47.712 498.989 48.48 495.149 50.016C491.394 51.552 488.066 53.7707 485.165 56.672C482.349 59.488 480.13 62.816 478.509 66.656C476.973 70.4107 476.205 74.592 476.205 79.2C476.205 83.7227 476.973 87.904 478.509 91.744C480.13 95.584 482.349 98.9547 485.165 101.856C487.981 104.672 491.309 106.848 495.149 108.384C498.989 109.92 503.17 110.688 507.693 110.688ZM568.467 124V34.4H605.331C613.267 34.4 620.051 35.68 625.683 38.24C631.4 40.8 635.795 44.4693 638.867 49.248C641.939 54.0267 643.475 59.7013 643.475 66.272C643.475 72.8427 641.939 78.5173 638.867 83.296C635.795 87.9893 631.4 91.616 625.683 94.176C620.051 96.6507 613.267 97.888 605.331 97.888H577.683L585.107 90.336V124H568.467ZM627.091 124L604.435 91.488H622.227L645.011 124H627.091ZM585.107 92.128L577.683 84.192H604.563C611.902 84.192 617.406 82.6133 621.075 79.456C624.83 76.2987 626.707 71.904 626.707 66.272C626.707 60.5547 624.83 56.16 621.075 53.088C617.406 50.016 611.902 48.48 604.563 48.48H577.683L585.107 40.288V92.128ZM708.347 124L678.651 34.4H695.931L722.427 115.424H713.851L741.371 34.4H756.731L783.483 115.424H775.163L802.299 34.4H818.171L788.475 124H770.811L746.363 50.912H750.971L726.139 124H708.347ZM937.423 124V48.48H907.727V34.4H983.759V48.48H954.063V124H937.423ZM1006.49 71.648H1051.03V85.344H1006.49V71.648ZM1007.77 110.048H1058.33V124H991.127V34.4H1056.54V48.352H1007.77V110.048ZM1071.76 124V34.4H1108.62C1116.56 34.4 1123.34 35.68 1128.97 38.24C1134.69 40.8 1139.08 44.4693 1142.16 49.248C1145.23 54.0267 1146.76 59.7013 1146.76 66.272C1146.76 72.8427 1145.23 78.5173 1142.16 83.296C1139.08 87.9893 1134.69 91.616 1128.97 94.176C1123.34 96.6507 1116.56 97.888 1108.62 97.888H1080.97L1088.4 90.336V124H1071.76ZM1130.38 124L1107.72 91.488H1125.52L1148.3 124H1130.38ZM1088.4 92.128L1080.97 84.192H1107.85C1115.19 84.192 1120.7 82.6133 1124.36 79.456C1128.12 76.2987 1130 71.904 1130 66.272C1130 60.5547 1128.12 56.16 1124.36 53.088C1120.7 50.016 1115.19 48.48 1107.85 48.48H1080.97L1088.4 40.288V92.128Z" fill="white"/>
                    <path d="M5.26521 198L24.9192 154.6H31.0572L50.7732 198H44.2632L26.7172 158.072H29.1972L11.6512 198H5.26521ZM13.6352 187.15L15.3092 182.19H39.7372L41.5352 187.15H13.6352ZM74.5178 175.122H96.8998V180.454H74.5178V175.122ZM75.1378 198H68.9378V154.6H99.5658V159.994H75.1378V198ZM124.921 198.496C121.614 198.496 118.535 197.938 115.683 196.822C112.872 195.706 110.434 194.156 108.367 192.172C106.3 190.147 104.688 187.791 103.531 185.104C102.374 182.417 101.795 179.483 101.795 176.3C101.795 173.117 102.374 170.183 103.531 167.496C104.688 164.809 106.3 162.474 108.367 160.49C110.434 158.465 112.872 156.894 115.683 155.778C118.494 154.662 121.573 154.104 124.921 154.104C128.228 154.104 131.266 154.662 134.035 155.778C136.846 156.853 139.284 158.403 141.351 160.428C143.459 162.412 145.071 164.747 146.187 167.434C147.344 170.121 147.923 173.076 147.923 176.3C147.923 179.524 147.344 182.479 146.187 185.166C145.071 187.853 143.459 190.209 141.351 192.234C139.284 194.218 136.846 195.768 134.035 196.884C131.266 197.959 128.228 198.496 124.921 198.496ZM124.921 192.978C127.318 192.978 129.53 192.565 131.555 191.738C133.622 190.911 135.399 189.754 136.887 188.266C138.416 186.737 139.594 184.959 140.421 182.934C141.289 180.909 141.723 178.697 141.723 176.3C141.723 173.903 141.289 171.691 140.421 169.666C139.594 167.641 138.416 165.884 136.887 164.396C135.399 162.867 133.622 161.689 131.555 160.862C129.53 160.035 127.318 159.622 124.921 159.622C122.482 159.622 120.23 160.035 118.163 160.862C116.138 161.689 114.36 162.867 112.831 164.396C111.302 165.884 110.103 167.641 109.235 169.666C108.408 171.691 107.995 173.903 107.995 176.3C107.995 178.697 108.408 180.909 109.235 182.934C110.103 184.959 111.302 186.737 112.831 188.266C114.36 189.754 116.138 190.911 118.163 191.738C120.23 192.565 122.482 192.978 124.921 192.978ZM172.899 198.496C167.195 198.496 162.71 196.863 159.445 193.598C156.18 190.333 154.547 185.559 154.547 179.276V154.6H160.747V179.028C160.747 183.864 161.801 187.398 163.909 189.63C166.058 191.862 169.076 192.978 172.961 192.978C176.888 192.978 179.905 191.862 182.013 189.63C184.163 187.398 185.237 183.864 185.237 179.028V154.6H191.251V179.276C191.251 185.559 189.619 190.333 186.353 193.598C183.129 196.863 178.644 198.496 172.899 198.496ZM201.482 198V154.6H206.566L235.272 190.25H232.606V154.6H238.806V198H233.722L205.016 162.35H207.682V198H201.482ZM249.317 198V154.6H267.607C272.236 154.6 276.307 155.509 279.821 157.328C283.375 159.147 286.124 161.689 288.067 164.954C290.051 168.219 291.043 172.001 291.043 176.3C291.043 180.599 290.051 184.381 288.067 187.646C286.124 190.911 283.375 193.453 279.821 195.272C276.307 197.091 272.236 198 267.607 198H249.317ZM255.517 192.606H267.235C270.831 192.606 273.931 191.924 276.535 190.56C279.18 189.196 281.226 187.295 282.673 184.856C284.119 182.376 284.843 179.524 284.843 176.3C284.843 173.035 284.119 170.183 282.673 167.744C281.226 165.305 279.18 163.404 276.535 162.04C273.931 160.676 270.831 159.994 267.235 159.994H255.517V192.606ZM290.882 198L310.536 154.6H316.674L336.39 198H329.88L312.334 158.072H314.814L297.268 198H290.882ZM299.252 187.15L300.926 182.19H325.354L327.152 187.15H299.252ZM346.822 198V159.994H331.942V154.6H367.84V159.994H352.96V198H346.822ZM372.113 198V154.6H378.313V198H372.113ZM408.418 198.496C405.112 198.496 402.032 197.938 399.18 196.822C396.37 195.706 393.931 194.156 391.864 192.172C389.798 190.147 388.186 187.791 387.028 185.104C385.871 182.417 385.292 179.483 385.292 176.3C385.292 173.117 385.871 170.183 387.028 167.496C388.186 164.809 389.798 162.474 391.864 160.49C393.931 158.465 396.37 156.894 399.18 155.778C401.991 154.662 405.07 154.104 408.418 154.104C411.725 154.104 414.763 154.662 417.532 155.778C420.343 156.853 422.782 158.403 424.848 160.428C426.956 162.412 428.568 164.747 429.684 167.434C430.842 170.121 431.42 173.076 431.42 176.3C431.42 179.524 430.842 182.479 429.684 185.166C428.568 187.853 426.956 190.209 424.848 192.234C422.782 194.218 420.343 195.768 417.532 196.884C414.763 197.959 411.725 198.496 408.418 198.496ZM408.418 192.978C410.816 192.978 413.027 192.565 415.052 191.738C417.119 190.911 418.896 189.754 420.384 188.266C421.914 186.737 423.092 184.959 423.918 182.934C424.786 180.909 425.22 178.697 425.22 176.3C425.22 173.903 424.786 171.691 423.918 169.666C423.092 167.641 421.914 165.884 420.384 164.396C418.896 162.867 417.119 161.689 415.052 160.862C413.027 160.035 410.816 159.622 408.418 159.622C405.98 159.622 403.727 160.035 401.66 160.862C399.635 161.689 397.858 162.867 396.328 164.396C394.799 165.884 393.6 167.641 392.732 169.666C391.906 171.691 391.492 173.903 391.492 176.3C391.492 178.697 391.906 180.909 392.732 182.934C393.6 184.959 394.799 186.737 396.328 188.266C397.858 189.754 399.635 190.911 401.66 191.738C403.727 192.565 405.98 192.978 408.418 192.978ZM438.417 198V154.6H443.501L472.207 190.25H469.541V154.6H475.741V198H470.657L441.951 162.35H444.617V198H438.417ZM509.039 198V159.994H494.159V154.6H530.057V159.994H515.177V198H509.039ZM553.317 198.496C550.01 198.496 546.931 197.938 544.079 196.822C541.268 195.706 538.829 194.156 536.763 192.172C534.696 190.147 533.084 187.791 531.927 185.104C530.769 182.417 530.191 179.483 530.191 176.3C530.191 173.117 530.769 170.183 531.927 167.496C533.084 164.809 534.696 162.474 536.763 160.49C538.829 158.465 541.268 156.894 544.079 155.778C546.889 154.662 549.969 154.104 553.317 154.104C556.623 154.104 559.661 154.662 562.431 155.778C565.241 156.853 567.68 158.403 569.747 160.428C571.855 162.412 573.467 164.747 574.583 167.434C575.74 170.121 576.319 173.076 576.319 176.3C576.319 179.524 575.74 182.479 574.583 185.166C573.467 187.853 571.855 190.209 569.747 192.234C567.68 194.218 565.241 195.768 562.431 196.884C559.661 197.959 556.623 198.496 553.317 198.496ZM553.317 192.978C555.714 192.978 557.925 192.565 559.951 191.738C562.017 190.911 563.795 189.754 565.283 188.266C566.812 186.737 567.99 184.959 568.817 182.934C569.685 180.909 570.119 178.697 570.119 176.3C570.119 173.903 569.685 171.691 568.817 169.666C567.99 167.641 566.812 165.884 565.283 164.396C563.795 162.867 562.017 161.689 559.951 160.862C557.925 160.035 555.714 159.622 553.317 159.622C550.878 159.622 548.625 160.035 546.559 160.862C544.533 161.689 542.756 162.867 541.227 164.396C539.697 165.884 538.499 167.641 537.631 169.666C536.804 171.691 536.391 173.903 536.391 176.3C536.391 178.697 536.804 180.909 537.631 182.934C538.499 184.959 539.697 186.737 541.227 188.266C542.756 189.754 544.533 190.911 546.559 191.738C548.625 192.565 550.878 192.978 553.317 192.978ZM597.485 198V154.6H614.411C618.214 154.6 621.459 155.199 624.145 156.398C626.832 157.597 628.899 159.333 630.345 161.606C631.792 163.879 632.515 166.587 632.515 169.728C632.515 172.869 631.792 175.577 630.345 177.85C628.899 180.082 626.832 181.818 624.145 183.058C621.459 184.257 618.214 184.856 614.411 184.856H600.895L603.685 181.942V198H597.485ZM603.685 182.562L600.895 179.462H614.225C618.193 179.462 621.19 178.615 623.215 176.92C625.282 175.225 626.315 172.828 626.315 169.728C626.315 166.628 625.282 164.231 623.215 162.536C621.19 160.841 618.193 159.994 614.225 159.994H600.895L603.685 156.894V182.562ZM639.144 198V154.6H656.07C659.873 154.6 663.117 155.199 665.804 156.398C668.491 157.597 670.557 159.333 672.004 161.606C673.451 163.879 674.174 166.587 674.174 169.728C674.174 172.869 673.451 175.577 672.004 177.85C670.557 180.082 668.491 181.797 665.804 182.996C663.117 184.195 659.873 184.794 656.07 184.794H642.554L645.344 181.942V198H639.144ZM668.16 198L657.124 182.252H663.758L674.918 198H668.16ZM645.344 182.562L642.554 179.524H655.884C659.852 179.524 662.849 178.677 664.874 176.982C666.941 175.246 667.974 172.828 667.974 169.728C667.974 166.628 666.941 164.231 664.874 162.536C662.849 160.841 659.852 159.994 655.884 159.994H642.554L645.344 156.894V182.562ZM687.353 173.324H709.673V178.594H687.353V173.324ZM687.911 192.606H713.207V198H681.711V154.6H712.339V159.994H687.911V192.606ZM733.414 198.496C730.107 198.496 726.945 198 723.928 197.008C720.911 195.975 718.534 194.652 716.798 193.04L719.092 188.204C720.745 189.651 722.853 190.849 725.416 191.8C727.979 192.751 730.645 193.226 733.414 193.226C735.935 193.226 737.981 192.937 739.552 192.358C741.123 191.779 742.28 190.994 743.024 190.002C743.768 188.969 744.14 187.811 744.14 186.53C744.14 185.042 743.644 183.843 742.652 182.934C741.701 182.025 740.441 181.301 738.87 180.764C737.341 180.185 735.646 179.689 733.786 179.276C731.926 178.863 730.045 178.387 728.144 177.85C726.284 177.271 724.569 176.548 722.998 175.68C721.469 174.812 720.229 173.655 719.278 172.208C718.327 170.72 717.852 168.819 717.852 166.504C717.852 164.272 718.431 162.226 719.588 160.366C720.787 158.465 722.605 156.956 725.044 155.84C727.524 154.683 730.665 154.104 734.468 154.104C736.989 154.104 739.49 154.435 741.97 155.096C744.45 155.757 746.599 156.708 748.418 157.948L746.372 162.908C744.512 161.668 742.549 160.779 740.482 160.242C738.415 159.663 736.411 159.374 734.468 159.374C732.029 159.374 730.025 159.684 728.454 160.304C726.883 160.924 725.726 161.751 724.982 162.784C724.279 163.817 723.928 164.975 723.928 166.256C723.928 167.785 724.403 169.005 725.354 169.914C726.346 170.823 727.607 171.547 729.136 172.084C730.707 172.621 732.422 173.117 734.282 173.572C736.142 173.985 738.002 174.461 739.862 174.998C741.763 175.535 743.479 176.238 745.008 177.106C746.579 177.974 747.839 179.131 748.79 180.578C749.741 182.025 750.216 183.885 750.216 186.158C750.216 188.349 749.617 190.395 748.418 192.296C747.219 194.156 745.359 195.665 742.838 196.822C740.358 197.938 737.217 198.496 733.414 198.496ZM762.436 173.324H784.756V178.594H762.436V173.324ZM762.994 192.606H788.29V198H756.794V154.6H787.422V159.994H762.994V192.606ZM795.849 198V154.6H812.775C816.578 154.6 819.822 155.199 822.509 156.398C825.196 157.597 827.262 159.333 828.709 161.606C830.156 163.879 830.879 166.587 830.879 169.728C830.879 172.869 830.156 175.577 828.709 177.85C827.262 180.082 825.196 181.797 822.509 182.996C819.822 184.195 816.578 184.794 812.775 184.794H799.259L802.049 181.942V198H795.849ZM824.865 198L813.829 182.252H820.463L831.623 198H824.865ZM802.049 182.562L799.259 179.524H812.589C816.557 179.524 819.554 178.677 821.579 176.982C823.646 175.246 824.679 172.828 824.679 169.728C824.679 166.628 823.646 164.231 821.579 162.536C819.554 160.841 816.557 159.994 812.589 159.994H799.259L802.049 156.894V182.562ZM850.94 198L831.844 154.6H838.54L856.086 194.652H852.242L869.912 154.6H876.112L857.078 198H850.94ZM884.808 173.324H907.128V178.594H884.808V173.324ZM885.366 192.606H910.662V198H879.166V154.6H909.794V159.994H885.366V192.606ZM942.374 198L927.866 154.6H934.252L947.582 194.652H944.358L958.184 154.6H963.888L977.404 194.652H974.304L987.82 154.6H993.71L979.202 198H972.692L960.044 160.862H961.718L949.008 198H942.374ZM990.85 198L1010.5 154.6H1016.64L1036.36 198H1029.85L1012.3 158.072H1014.78L997.236 198H990.85ZM999.22 187.15L1000.89 182.19H1025.32L1027.12 187.15H999.22ZM1046.79 198V159.994H1031.91V154.6H1067.81V159.994H1052.93V198H1046.79ZM1077.72 173.324H1100.04V178.594H1077.72V173.324ZM1078.28 192.606H1103.58V198H1072.08V154.6H1102.71V159.994H1078.28V192.606ZM1111.14 198V154.6H1128.06C1131.86 154.6 1135.11 155.199 1137.8 156.398C1140.48 157.597 1142.55 159.333 1144 161.606C1145.44 163.879 1146.17 166.587 1146.17 169.728C1146.17 172.869 1145.44 175.577 1144 177.85C1142.55 180.082 1140.48 181.797 1137.8 182.996C1135.11 184.195 1131.86 184.794 1128.06 184.794H1114.55L1117.34 181.942V198H1111.14ZM1140.15 198L1129.12 182.252H1135.75L1146.91 198H1140.15ZM1117.34 182.562L1114.55 179.524H1127.88C1131.84 179.524 1134.84 178.677 1136.87 176.982C1138.93 175.246 1139.97 172.828 1139.97 169.728C1139.97 166.628 1138.93 164.231 1136.87 162.536C1134.84 160.841 1131.84 159.994 1127.88 159.994H1114.55L1117.34 156.894V182.562Z" fill="white"/>
                    <path d="M900 102C900 121.606 884.106 137.5 864.5 137.5C844.894 137.5 829 121.606 829 102C829 78.5 864.5 42.5 864.5 19C864.5 42.5 900 78.5 900 102Z" fill="#69BFE8"/>
                </svg>
            </div>
        
            <div class="perso">
                
            </div>
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