
function QuizCard(){
    // Styles en ligne pour un design simple
const cardStyle = {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    maxWidth: '600px',
    margin: '20px auto',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    backgroundColor: 'rgba(249, 249, 249, 0.7)',
    };
    
    const titleStyle = {
    color: 'rgba(44, 62, 80, 0.7)',
    fontSize: '1.5rem',
    marginBottom: '16px',
    textAlign: 'left',
    };
    
    const paragraphStyle = {
    color: 'rgba(52, 73, 94, 0.7)',
    fontSize: '1rem',
    lineHeight: '1.6',
    marginBottom: '12px',
    textAlign:'left',
    
    };
    
return(
    <div style={cardStyle}>
    <h2 style={titleStyle}>Les Poumons de l'Océan</h2>
    <p style={paragraphStyle}>
      Les poumons humains sont chargés de la respiration, l'océan aussi a besoin de respirer, 
      et pour cela, il compte sur les phytoplanctons et les algues.
    </p>
    <p style={paragraphStyle}>
      Ces organismes microscopiques jouent un rôle très important en produisant de l'oxygène grâce à la photosynthèse, 
      tout en absorbant le dioxyde de carbone de l’atmosphère. Ce processus est essentiel d’abord pour l’équilibre chimique de l’océan, 
      mais aussi et surtout pour l’ensemble de la planète, puisque près de 50 % de l’oxygène que nous respirons provient de ces "poumons marins".
    </p>
    <p style={paragraphStyle}>
      De plus, le phytoplancton est à la base de la chaîne alimentaire marine. Il nourrit directement ou indirectement presque toutes les formes 
      de vie océanique, des petits crustacés comme le krill jusqu’aux plus grands mammifères comme les baleines. Ces organismes et leur production 
      d’oxygène sont à la base de la vie et un élément fondamental.
    </p>
  </div>
);

}
export default QuizCard