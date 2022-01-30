import React from 'react';
import SeveralCars from '../assets/severalCars.jpg'
import '../styles/About.css';

function About() {
  return <div className='about'>
      <div className='aboutTop' style={{backgroundImage: `url(${SeveralCars})`}}></div>

      <div className='aboutBottom'>
          <h1>ABOUT US</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tempor orci id mi convallis, id vehicula sapien vehicula. Ut congue gravida neque. Nullam vitae risus ac erat lacinia malesuada nec et lorem. Etiam sem urna, pulvinar nec ante eget, volutpat laoreet elit. Nulla facilisi. Aliquam erat volutpat. Aliquam interdum imperdiet velit, at vestibulum lorem feugiat at. Fusce a quam accumsan, pellentesque nulla eu, mollis ligula. Nunc ultricies tortor ut risus tempor pulvinar. Nulla fermentum sollicitudin arcu, vitae bibendum leo. Cras vestibulum ornare magna quis tincidunt. Proin eu risus quis mi ultricies elementum non nec lectus. Quisque ut ex turpis. Praesent vulputate nunc sem, id egestas risus rutrum id. In et euismod metus, sit amet varius turpis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.

Etiam semper dictum felis. Phasellus aliquet quam nisl, sit amet molestie dui semper ut. Proin condimentum ut eros at luctus. Vivamus ornare egestas tellus in interdum. Maecenas a sem quis mauris rhoncus fringilla. Duis sodales massa commodo erat feugiat, sit amet ultricies purus tempus. Vestibulum luctus ipsum purus, vitae sollicitudin tortor porta nec. Sed tortor velit, eleifend id ipsum ac, ultrices dictum risus. Aliquam euismod rhoncus nisl sed pellentesque. Etiam suscipit accumsan dolor accumsan auctor. Etiam molestie egestas odio, nec sagittis quam feugiat et. Etiam iaculis nibh ullamcorper augue cursus semper. Donec a hendrerit ante. Nulla sit amet urna eu sem fermentum posuere ut vel urna.
</p>      </div>
  </div>;
}

export default About;
