import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

export const GS = createGlobalStyle`
  body {
    background-color: black !important;
  }
`;

export const ContainerOne = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url("https://avatars.githubusercontent.com/u/22061815?v=4");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  line-height: 12px;
  overflow: auto;

  /* https://css-tricks.com/almanac/properties/b/background-clip/#aa-text */
  -webkit-background-clip: text;
  color: transparent;
`;

export const ContainerTwo = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 100px;

  background-image: linear-gradient(
    90deg,
    #4158d0 0%,
    #fe00ed 46%,
    #ffa600 80%
  );
  -webkit-background-clip: text;
  color: transparent;
`;

function Carousel() {
  return (
    <>
      <ContainerOne>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure harum
        perferendis expedita laudantium non animi doloremque labore dolorum
        recusandae, deserunt sequi officiis cupiditate, ex voluptate tenetur
        quae totam, et impedit esse accusamus? Blanditiis, accusantium minima
        accusamus tempore quasi aliquid ratione at, rem temporibus aliquam,
        tenetur quas. Labore, nihil deleniti? Est eveniet aut perferendis
        expedita sunt asperiores sapiente ipsa? Quisquam error tenetur fugit
        eveniet, nihil cum suscipit dicta facilis! Dignissimos reprehenderit
        fugit natus fuga. Nobis, eaque. Accusantium explicabo soluta illum,
        culpa hic qui. Corrupti assumenda error consequatur excepturi,
        distinctio dicta quidem animi doloremque explicabo nam laborum cum
        consequuntur libero sequi possimus quisquam aliquam deserunt odit
        eveniet! Excepturi pariatur odit sed, exercitationem facilis dolor porro
        eius sequi. Voluptatum nam debitis deserunt exercitationem consectetur
        illum assumenda molestiae quos delectus neque vitae aspernatur
        architecto pariatur obcaecati a rem veniam impedit maiores esse,
        molestias ratione unde. Voluptatibus provident deserunt corrupti quam
        voluptatem rerum magnam harum itaque assumenda aliquam omnis nulla, eum
        corporis velit fugiat quisquam sit, saepe excepturi, dolores et. Omnis
        voluptatibus ea non eos ullam praesentium accusamus quia autem vitae
        voluptate, nesciunt quis rem aliquam beatae, odio vel. Quo, fugit!
        Velit, provident magni? Veritatis quidem porro amet tempora, dolore
        laboriosam rem ut aspernatur fugiat. Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Iure harum perferendis expedita laudantium
        non animi doloremque labore dolorum recusandae, deserunt sequi officiis
        cupiditate, ex voluptate tenetur quae totam, et impedit esse accusamus?
        Blanditiis, accusantium minima accusamus tempore quasi aliquid ratione
        at, rem temporibus aliquam, tenetur quas. Labore, nihil deleniti? Est
        eveniet aut perferendis expedita sunt asperiores sapiente ipsa? Quisquam
        error tenetur fugit eveniet, nihil cum suscipit dicta facilis!
        Dignissimos reprehenderit fugit natus fuga. Nobis, eaque. Accusantium
        explicabo soluta illum, culpa hic qui. Corrupti assumenda error
        consequatur excepturi, distinctio dicta quidem animi doloremque
        explicabo nam laborum cum consequuntur libero sequi possimus quisquam
        aliquam deserunt odit eveniet! Excepturi pariatur odit sed,
        exercitationem facilis dolor porro eius sequi. Voluptatum nam debitis
        deserunt exercitationem consectetur illum assumenda molestiae quos
        delectus neque vitae aspernatur architecto pariatur obcaecati a rem
        veniam impedit maiores esse, molestias ratione unde. Voluptatibus
        provident deserunt corrupti quam voluptatem rerum magnam harum itaque
        assumenda aliquam omnis nulla, eum corporis velit fugiat quisquam sit,
        saepe excepturi, dolores et. Omnis voluptatibus ea non eos ullam
        praesentium accusamus quia autem vitae voluptate, nesciunt quis rem
        aliquam beatae, odio vel. Quo, fugit! Velit, provident magni? Veritatis
        quidem porro amet tempora, dolore laboriosam rem ut aspernatur fugiat.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure harum
        perferendis expedita laudantium non animi doloremque labore dolorum
        recusandae, deserunt sequi officiis cupiditate, ex voluptate tenetur
        quae totam, et impedit esse accusamus? Blanditiis, accusantium minima
        accusamus tempore quasi aliquid ratione at, rem temporibus aliquam,
        tenetur quas. Labore, nihil deleniti? Est eveniet aut perferendis
        expedita sunt asperiores sapiente ipsa? Quisquam error tenetur fugit
        eveniet, nihil cum suscipit dicta facilis! Dignissimos reprehenderit
        fugit natus fuga. Nobis, eaque. Accusantium explicabo soluta illum,
        culpa hic qui. Corrupti assumenda error consequatur excepturi,
        distinctio dicta quidem animi doloremque explicabo nam laborum cum
        consequuntur libero sequi possimus quisquam aliquam deserunt odit
        eveniet! Excepturi pariatur odit sed, exercitationem facilis dolor porro
        eius sequi. Voluptatum nam debitis deserunt exercitationem consectetur
        illum assumenda molestiae quos delectus neque vitae aspernatur
        architecto pariatur obcaecati a rem veniam impedit maiores esse,
        molestias ratione unde. Voluptatibus provident deserunt corrupti quam
        voluptatem rerum magnam harum itaque assumenda aliquam omnis nulla, eum
        corporis velit fugiat quisquam sit, saepe excepturi, dolores et. Omnis
        voluptatibus ea non eos ullam praesentium accusamus quia autem vitae
        voluptate, nesciunt quis rem aliquam beatae, odio vel. Quo, fugit!
        Velit, provident magni? Veritatis quidem porro amet tempora, dolore
        laboriosam rem ut aspernatur fugiat. Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Iure harum perferendis expedita laudantium
        non animi doloremque labore dolorum recusandae, deserunt sequi officiis
        cupiditate, ex voluptate tenetur quae totam, et impedit esse accusamus?
        Blanditiis, accusantium minima accusamus tempore quasi aliquid ratione
        at, rem temporibus aliquam, tenetur quas. Labore, nihil deleniti? Est
        eveniet aut perferendis expedita sunt asperiores sapiente ipsa? Quisquam
        error tenetur fugit eveniet, nihil cum suscipit dicta facilis!
        Dignissimos reprehenderit fugit natus fuga. Nobis, eaque. Accusantium
        explicabo soluta illum, culpa hic qui. Corrupti assumenda error
        consequatur excepturi, distinctio dicta quidem animi doloremque
        explicabo nam laborum cum consequuntur libero sequi possimus quisquam
        aliquam deserunt odit eveniet! Excepturi pariatur odit sed,
        exercitationem facilis dolor porro eius sequi. Voluptatum nam debitis
        deserunt exercitationem consectetur illum assumenda molestiae quos
        delectus neque vitae aspernatur architecto pariatur obcaecati a rem
        veniam impedit maiores esse, molestias ratione unde. Voluptatibus
        provident deserunt corrupti quam voluptatem rerum magnam harum itaque
        assumenda aliquam omnis nulla, eum corporis velit fugiat quisquam sit,
        saepe excepturi, dolores et. Omnis voluptatibus ea non eos ullam
        praesentium accusamus quia autem vitae voluptate, nesciunt quis rem
        aliquam beatae, odio vel. Quo, fugit! Velit, provident magni? Veritatis
        quidem porro amet tempora, dolore laboriosam rem ut aspernatur fugiat.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure harum
        perferendis expedita laudantium non animi doloremque labore dolorum
        recusandae, deserunt sequi officiis cupiditate, ex voluptate tenetur
        quae totam, et impedit esse accusamus? Blanditiis, accusantium minima
        accusamus tempore quasi aliquid ratione at, rem temporibus aliquam,
        tenetur quas. Labore, nihil deleniti? Est eveniet aut perferendis
        expedita sunt asperiores sapiente ipsa? Quisquam error tenetur fugit
        eveniet, nihil cum suscipit dicta facilis! Dignissimos reprehenderit
        fugit natus fuga. Nobis, eaque. Accusantium explicabo soluta illum,
        culpa hic qui. Corrupti assumenda error consequatur excepturi,
        distinctio dicta quidem animi doloremque explicabo nam laborum cum
        consequuntur libero sequi possimus quisquam aliquam deserunt odit
        eveniet! Excepturi pariatur odit sed, exercitationem facilis dolor porro
        eius sequi. Voluptatum nam debitis deserunt exercitationem consectetur
        illum assumenda molestiae quos delectus neque vitae aspernatur
        architecto pariatur obcaecati a rem veniam impedit maiores esse,
        molestias ratione unde. Voluptatibus provident deserunt corrupti quam
        voluptatem rerum magnam harum itaque assumenda aliquam omnis nulla, eum
        corporis velit fugiat quisquam sit, saepe excepturi, dolores et. Omnis
        voluptatibus ea non eos ullam praesentium accusamus quia autem vitae
        voluptate, nesciunt quis rem aliquam beatae, odio vel. Quo, fugit!
        Velit, provident magni? Veritatis quidem porro amet tempora, dolore
        laboriosam rem ut aspernatur fugiat. Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Iure harum perferendis expedita laudantium
        non animi doloremque labore dolorum recusandae, deserunt sequi officiis
        cupiditate, ex voluptate tenetur quae totam, et impedit esse accusamus?
        Blanditiis, accusantium minima accusamus tempore quasi aliquid ratione
        at, rem temporibus aliquam, tenetur quas. Labore, nihil deleniti? Est
        eveniet aut perferendis expedita sunt asperiores sapiente ipsa? Quisquam
        error tenetur fugit eveniet, nihil cum suscipit dicta facilis!
        Dignissimos reprehenderit fugit natus fuga. Nobis, eaque. Accusantium
        explicabo soluta illum, culpa hic qui. Corrupti assumenda error
        consequatur excepturi, distinctio dicta quidem animi doloremque
        explicabo nam laborum cum consequuntur libero sequi possimus quisquam
        aliquam deserunt odit eveniet! Excepturi pariatur odit sed,
        exercitationem facilis dolor porro eius sequi. Voluptatum nam debitis
        deserunt exercitationem consectetur illum assumenda molestiae quos
        delectus neque vitae aspernatur architecto pariatur obcaecati a rem
        veniam impedit maiores esse, molestias ratione unde. Voluptatibus
        provident deserunt corrupti quam voluptatem rerum magnam harum itaque
        assumenda aliquam omnis nulla, eum corporis velit fugiat quisquam sit,
        saepe excepturi, dolores et. Omnis voluptatibus ea non eos ullam
        praesentium accusamus quia autem vitae voluptate, nesciunt quis rem
        aliquam beatae, odio vel. Quo, fugit! Velit, provident magni? Veritatis
        quidem porro amet tempora, dolore laboriosam rem ut aspernatur fugiat.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure harum
        perferendis expedita laudantium non animi doloremque labore dolorum
        recusandae, deserunt sequi officiis cupiditate, ex voluptate tenetur
        quae totam, et impedit esse accusamus? Blanditiis, accusantium minima
        accusamus tempore quasi aliquid ratione at, rem temporibus aliquam,
        tenetur quas. Labore, nihil deleniti? Est eveniet aut perferendis
        expedita sunt asperiores sapiente ipsa? Quisquam error tenetur fugit
        eveniet, nihil cum suscipit dicta facilis! Dignissimos reprehenderit
        fugit natus fuga. Nobis, eaque. Accusantium explicabo soluta illum,
        culpa hic qui. Corrupti assumenda error consequatur excepturi,
        distinctio dicta quidem animi doloremque explicabo nam laborum cum
        consequuntur libero sequi possimus quisquam aliquam deserunt odit
        eveniet! Excepturi pariatur odit sed, exercitationem facilis dolor porro
        eius sequi. Voluptatum nam debitis deserunt exercitationem consectetur
        illum assumenda molestiae quos delectus neque vitae aspernatur
        architecto pariatur obcaecati a rem veniam impedit maiores esse,
        molestias ratione unde. Voluptatibus provident deserunt corrupti quam
        voluptatem rerum magnam harum itaque assumenda aliquam omnis nulla, eum
        corporis velit fugiat quisquam sit, saepe excepturi, dolores et. Omnis
        voluptatibus ea non eos ullam praesentium accusamus quia autem vitae
        voluptate, nesciunt quis rem aliquam beatae, odio vel. Quo, fugit!
        Velit, provident magni? Veritatis quidem porro amet tempora, dolore
        laboriosam rem ut aspernatur fugiat. Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Iure harum perferendis expedita laudantium
        non animi doloremque labore dolorum recusandae, deserunt sequi officiis
        cupiditate, ex voluptate tenetur quae totam, et impedit esse accusamus?
        Blanditiis, accusantium minima accusamus tempore quasi aliquid ratione
        at, rem temporibus aliquam, tenetur quas. Labore, nihil deleniti? Est
        eveniet aut perferendis expedita sunt asperiores sapiente ipsa? Quisquam
        error tenetur fugit eveniet, nihil cum suscipit dicta facilis!
        Dignissimos reprehenderit fugit natus fuga. Nobis, eaque. Accusantium
        explicabo soluta illum, culpa hic qui. Corrupti assumenda error
        consequatur excepturi, distinctio dicta quidem animi doloremque
        explicabo nam laborum cum consequuntur libero sequi possimus quisquam
        aliquam deserunt odit eveniet! Excepturi pariatur odit sed,
        exercitationem facilis dolor porro eius sequi. Voluptatum nam debitis
        deserunt exercitationem consectetur illum assumenda molestiae quos
        delectus neque vitae aspernatur architecto pariatur obcaecati a rem
        veniam impedit maiores esse, molestias ratione unde. Voluptatibus
        provident deserunt corrupti quam voluptatem rerum magnam harum itaque
        assumenda aliquam omnis nulla, eum corporis velit fugiat quisquam sit,
        saepe excepturi, dolores et. Omnis voluptatibus ea non eos ullam
        praesentium accusamus quia autem vitae voluptate, nesciunt quis rem
        aliquam beatae, odio vel. Quo, fugit! Velit, provident magni? Veritatis
        quidem porro amet tempora, dolore laboriosam rem ut aspernatur fugiat.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure harum
        perferendis expedita laudantium non animi doloremque labore dolorum
        recusandae, deserunt sequi officiis cupiditate, ex voluptate tenetur
        quae totam, et impedit esse accusamus? Blanditiis, accusantium minima
        accusamus tempore quasi aliquid ratione at, rem temporibus aliquam,
        tenetur quas. Labore, nihil deleniti? Est eveniet aut perferendis
        expedita sunt asperiores sapiente ipsa? Quisquam error tenetur fugit
        eveniet, nihil cum suscipit dicta facilis! Dignissimos reprehenderit
        fugit natus fuga. Nobis, eaque. Accusantium explicabo soluta illum,
        culpa hic qui. Corrupti assumenda error consequatur excepturi,
        distinctio dicta quidem animi doloremque explicabo nam laborum cum
        consequuntur libero sequi possimus quisquam aliquam deserunt odit
        eveniet! Excepturi pariatur odit sed, exercitationem facilis dolor porro
        eius sequi. Voluptatum nam debitis deserunt exercitationem consectetur
        illum assumenda molestiae quos delectus neque vitae aspernatur
        architecto pariatur obcaecati a rem veniam impedit maiores esse,
        molestias ratione unde. Voluptatibus provident deserunt corrupti quam
        voluptatem rerum magnam harum itaque assumenda aliquam omnis nulla, eum
        corporis velit fugiat quisquam sit, saepe excepturi, dolores et. Omnis
        voluptatibus ea non eos ullam praesentium accusamus quia autem vitae
        voluptate, nesciunt quis rem aliquam beatae, odio vel. Quo, fugit!
        Velit, provident magni? Veritatis quidem porro amet tempora, dolore
        laboriosam rem ut aspernatur fugiat.
      </ContainerOne>

      <ContainerTwo>Mohan Das</ContainerTwo>
      <GS />
    </>
  );
}

export default Carousel;
