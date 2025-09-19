<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class ReviewsTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('reviews')->delete();
        
        \DB::table('reviews')->insert(array (
            0 => 
            array (
                'id' => 1,
                'source' => 'google',
                'author' => 'The Fernandez',
                'img_url' => 'https://lh3.googleusercontent.com/a/ACg8ocKqTSBf66fqQDXf84oEL8YDqkvprOqrjZbN1l1dB2YKUs9hSw=s40-c-rp-mo-br100',
                'rating' => 5,
                'content' => 'Sheila and her team made our first time home buying journey seamless. No words can express how grateful we are with her entire team.Sheila has a power to flip impossible to possible.',
                'date' => '3 months ago',
                'created_at' => '2024-10-04 13:52:16',
                'updated_at' => '2025-08-22 00:00:43',
            ),
            1 => 
            array (
                'id' => 2,
                'source' => 'google',
                'author' => 'Montaser Majali',
                'img_url' => 'https://lh3.googleusercontent.com/a/ACg8ocKHlzkjeDHzejxHNgkawBKgdNbdAkWZ06maSMzb1DXFeOM5ng=s40-c-rp-mo-br100',
                'rating' => 5,
                'content' => 'Sheilla and her team the best from all of the people I did work with. She did help me to buy three properties without her. I am not gonna be able to buy anything she you know what she’s doing good   I do recommend her for everyone and she is good at referral to.',
                'date' => '5 months ago',
                'created_at' => '2024-10-04 13:52:16',
                'updated_at' => '2025-08-22 00:00:43',
            ),
            2 => 
            array (
                'id' => 3,
                'source' => 'google',
                'author' => 'Alili David',
                'img_url' => 'https://lh3.googleusercontent.com/a-/ALV-UjVqxXHh9_lHuBWU3ToyNF6lXKWIepJ8ie28UVm1aVcAio4E1A=s40-c-rp-mo-br100',
                'rating' => 5,
                'content' => 'Sheilla and her team were amazing and were very helpful, supportive, and made everything easy to understand. They made our first house buying experience smooth and simple. Sheilla and her team will take very good care of you, make sure all your questions and concerns are answered in a reassuring manner. I can’t recommend them enough, amazing people!!',
                'date' => '3 months ago',
                'created_at' => '2024-10-04 13:52:16',
                'updated_at' => '2025-08-22 00:00:43',
            ),
            3 => 
            array (
                'id' => 4,
                'source' => 'google',
                'author' => 'Niño David',
                'img_url' => 'https://lh3.googleusercontent.com/a/ACg8ocKeA711gZYOiJHUndQiZvowK14M4-vY1fFYhtioB8aFY_jVCw=s40-c-rp-mo-br100',
                'rating' => 5,
                'content' => 'Buying your first home could possibly be stressful, and for someone without a financial background securing a mortgage is the most confusing part. However, Shiela and her team made our home buying process stress free. The service and personal attention we received from her was exceptional and beyond what we expected. She went out of her way to make sure we get the best possible rate and helped us secure our dream home. She was there every step of the way. I would definitely recommend her to anyone in the market for a mortgage.',
                'date' => '4 months ago',
                'created_at' => '2024-10-04 13:52:16',
                'updated_at' => '2025-08-22 00:00:43',
            ),
            4 => 
            array (
                'id' => 5,
                'source' => 'google',
                'author' => 'Alexis Flores',
                'img_url' => 'https://lh3.googleusercontent.com/a-/ALV-UjUMUOCozff0aRvVM-h6AxLXXE_BnTFK3bZkIj13GKxDKrKqlhg=s40-c-rp-mo-br100',
                'rating' => 5,
            'content' => 'I want to thank Sheilla and her team for helping me through my home buying experience. I was always receiving the best advise and  they had my interests at the top of their list with what was best for me. You trully help make peoples wishes come true, ill be coming back for the next one with y’all! :)',
            'date' => '3 months ago',
            'created_at' => '2024-10-04 13:52:16',
            'updated_at' => '2025-08-22 00:00:43',
        ),
        5 => 
        array (
            'id' => 6,
            'source' => 'google',
            'author' => 'James Lee',
            'img_url' => 'https://lh3.googleusercontent.com/a/ACg8ocLEfsAfLXa7uEnXw6PbHorh62biYIQRysX3rlkhQHvujHGzcA=s40-c-rp-mo-br100',
            'rating' => 5,
            'content' => 'Sheilla and her team were wonderful to work with. They were transparent and help clarify any confusion we had. I highly recommend their services to anyone looking to purchase a home.',
            'date' => '4 months ago',
            'created_at' => '2024-10-04 13:52:16',
            'updated_at' => '2025-08-22 00:00:43',
        ),
        6 => 
        array (
            'id' => 7,
            'source' => 'google',
            'author' => 'gio gomez',
            'img_url' => 'https://lh3.googleusercontent.com/a/ACg8ocIDNsIMCrBTszpIog5pZvpFg8aKkdHplDBfUA30POSPBzdfOQ=s40-c-rp-mo-br100',
            'rating' => 5,
            'content' => 'We had the immense pleasure of working with Sheila Lavadia and her exceptional team as our loan officer for our home purchase on April 5, 2024. From start to finish, Sheila and her team demonstrated outstanding professionalism, attention to detail, and unwavering dedication to our needs.The entire financing process was remarkably smooth and stress-free, thanks to their expert guidance and support. Sheila\'s deep knowledge of the mortgage industry and her strategic approach were invaluable in securing the best loan terms for us. Her team was always available to answer our questions promptly and thoroughly, ensuring we felt confident and informed every step of the way.Sheila and her team went above and beyond to ensure that all aspects of our loan approval were handled with the utmost care and precision. Their commitment to excellence was evident in every interaction, making us feel like valued clients throughout the process.We are extremely satisfied with the exceptional service provided by Sheila Lavadia and her team. We highly recommend them to anyone seeking loan services. Thank you, Sheila and team, for making our home-buying journey a truly wonderful and memorable experience!',
            'date' => '5 months ago',
            'created_at' => '2024-10-04 13:52:16',
            'updated_at' => '2025-08-22 00:00:43',
        ),
        7 => 
        array (
            'id' => 8,
            'source' => 'google',
            'author' => 'Mani Ka',
            'img_url' => 'https://lh3.googleusercontent.com/a/ACg8ocKf6nciMmek-5-XTtLdBJP3AwShCKbviSWN9Hxw3CFvXDCz3g=s40-c-rp-mo-br100',
            'rating' => 5,
            'content' => 'I am delighted to share my exceptional experience working with Sheilla during the process of securing my home loan. From start to the final closing, Sheilla demonstrated professionalism and expertise, making the entire process seamless.Sheilla was always available to answer my questions, no matter how small or complex. Her deep knowledge of the mortgage industry and her ability to explain every step of the process in clear, understandable terms made the entire experience stress-free and straightforward.She took the time to understand my financial situation and goals and worked tirelessly to find the best loan options available. Her proactive communication kept me informed at every stage, and her attention to detail ensured that everything proceeded smoothly.Libby, my loan processor, was equally impressive, managing all the details with precision and efficiency. Her meticulous attention to detail and timely communication kept the process moving smoothly.I would highly recommend Sheilla to anyone in need of a mortgage professional. She truly went above and beyond, and I couldn\'t be happier with the outcome.Thank you, Sheilla, for ensuring my homeownership journey was smooth and seamless!',
            'date' => '5 months ago',
            'created_at' => '2024-10-04 13:52:16',
            'updated_at' => '2025-08-22 00:00:43',
        ),
        8 => 
        array (
            'id' => 9,
            'source' => 'google',
            'author' => 'Bianca Moya',
            'img_url' => 'https://lh3.googleusercontent.com/a-/ALV-UjXrDLgAQVV9NfrL0OdLxrgfK-An8piWWLAbkUvuHUYuTx6JasVKoQ=s40-c-rp-mo-br100',
            'rating' => 5,
            'content' => 'I employed by Sheilla as her Media Manager from 2019-2022 and it was a truly wonderful experience! The reviews &amp; testimonies shared about her work and how she cares for her clients match up very well to her true work ethic and kindness! I’ve truly enjoyed working for her, and would highly suggest anyone to keep her in mind when purchasing a home not only for a loan that financially suits you but for a kind loan officer who has your best interest at heart!',
            'date' => '4 months ago',
            'created_at' => '2024-10-04 13:52:16',
            'updated_at' => '2024-10-22 00:00:28',
        ),
        9 => 
        array (
            'id' => 10,
            'source' => 'google',
            'author' => 'Red head',
            'img_url' => 'https://lh3.googleusercontent.com/a/ACg8ocIr-mxG_v3TXHcWZ1mdlyHgVcwSFSxlfCz_E6KJwpw--70FlWVi=s40-c-rp-mo-br100',
            'rating' => 5,
            'content' => 'I recently had the pleasure of working with Shiella and her team, and I can\'t recommend them highly enough.Their professionalism, dedication, and responsiveness were outstanding! They were committed to finding the best option for us, and I\'m happy to say we are now in our sweet home.What truly stood out was their transparant communication channel that kept me informed the entire process. I\'m very grateful to have had them by my side in this stressful journey, especially because it was our first time buying a home. Reach out to them if you want a broker that cares, responsive, and dedicated to your best interests. Thank you for everything!',
            'date' => '4 months ago',
            'created_at' => '2024-10-04 13:52:16',
            'updated_at' => '2025-08-22 00:00:43',
        ),
        10 => 
        array (
            'id' => 11,
            'source' => 'google',
            'author' => 'dylan agliam',
            'img_url' => 'https://lh3.googleusercontent.com/a-/ALV-UjUTCJI7VFOECD_NyKvdOAfFj4WXRjHtqkIpk-S1ad8p1BJ7HhTw=s40-c-rp-mo-br100',
            'rating' => 5,
            'content' => 'This was our first time buying a home, so we had a lot of questions and things we wanted to understand better. Throughout the whole process, Sheilla was able to communicate with us and answer all of our home loan/financing questions we had, and talk with us about what unfamiliar terms and practices meant. Thanks to her help, we had a much better understanding of what we were doing and could feel more confident moving forward. Sheilla and her team are very transparent with all the transactions. We highly recommend their team.',
            'date' => '6 months ago',
            'created_at' => '2024-10-04 13:52:16',
            'updated_at' => '2025-08-22 00:00:43',
        ),
        11 => 
        array (
            'id' => 12,
            'source' => 'google',
            'author' => 'Alen Creencia',
            'img_url' => 'https://lh3.googleusercontent.com/a/ACg8ocJqrtnlQBM2lEynwmLRDOQZOabslpKjZAKqbdtCN2HmCsSMtA=s40-c-rp-mo-br100',
            'rating' => 5,
            'content' => 'Sheila and her team helped me a lot during the process of purchasing our first home. They are so patient and willing to go above and beyond! Their expertise and dedication made the entire experience smooth and stress-free. From answering countless questions to providing valuable advice, they were always there when we needed them. I truly appreciated their professionalism, attention to detail, and the personal touch they brought to every interaction. I couldn\'t have asked for a better team to guide us through this important milestone! Thank you all!! ⭐️⭐️⭐️⭐️⭐️',
            'date' => '3 months ago',
            'created_at' => '2024-10-04 13:52:16',
            'updated_at' => '2025-08-22 00:00:43',
        ),
        12 => 
        array (
            'id' => 13,
            'source' => 'google',
            'author' => 'Lovely Villas',
            'img_url' => 'https://lh3.googleusercontent.com/a-/ALV-UjVBmJoW8HgedW5hkJyQKN_pwEWDh9jJBMWZBoyfwRf7al3QZSg=s40-c-rp-mo-br100',
            'rating' => 5,
            'content' => 'I am so grateful to work with Loans by Sheilla on my 1st homebuying experience, everything works so smoothly and she was very accomodating, patient as well as I am very new to this journey. I highly recommend her for those who wanna start their real state investment.',
            'date' => '4 months ago',
            'created_at' => '2024-10-04 13:52:16',
            'updated_at' => '2025-08-22 00:00:43',
        ),
        13 => 
        array (
            'id' => 14,
            'source' => 'google',
            'author' => 'Ariel Moya',
            'img_url' => 'https://lh3.googleusercontent.com/a-/ALV-UjVu7rmvXG5aFAGOPMeszwrq0jt9kayElonddMadlnRvWrN3VQ4S=s40-c-rp-mo-br100',
            'rating' => 5,
            'content' => 'I love her passion and dedication to helping clients achieve their real estate goals.  She has decades of experience, and has helped a lot of people, be successful in their real Estate ventures.',
            'date' => '6 months ago',
            'created_at' => '2024-10-04 13:52:16',
            'updated_at' => '2025-08-22 00:00:43',
        ),
        14 => 
        array (
            'id' => 15,
            'source' => 'google',
            'author' => 'Zeidrick Morales',
            'img_url' => 'https://lh3.googleusercontent.com/a/ACg8ocJUdwqzECGWM55tTmTvwuf0LCE4JljgJ6GpZ0Gewc07jrGRDw=s40-c-rp-mo-br100',
            'rating' => 5,
        'content' => 'Ate Sheila and her team were always there for us from day 1 (consultation) until closing date. Whenever we have a question regarding anything , she makes herself available to help us. Every step of this journey they made us feel we’re not alone. Kudos to this team. We are so grateful we met them and they were the instrument in realizing our dream.',
            'date' => '5 months ago',
            'created_at' => '2024-10-04 13:52:16',
            'updated_at' => '2025-08-22 00:00:43',
        ),
        15 => 
        array (
            'id' => 16,
            'source' => 'google',
            'author' => 'SirWanderLust',
            'img_url' => 'https://lh3.googleusercontent.com/a-/ALV-UjVOpwkLcFCmIwpxISdQgYBJXFsfRAWAD78saDPNgcy1UdHaXWM=s40-c-rp-mo-br100',
            'rating' => 5,
            'content' => 'Working with Sheilla gave us a smooth transaction. She made it easier to go through the process of purchasing our new home. Will work with her again!',
            'date' => '6 months ago',
            'created_at' => '2024-10-04 13:52:16',
            'updated_at' => '2025-08-22 00:00:43',
        ),
        16 => 
        array (
            'id' => 17,
            'source' => 'google',
            'author' => 'Anna Andres',
            'img_url' => 'https://lh3.googleusercontent.com/a-/ALV-UjV1GoPekc5tbqB0vlUOx31V9zi5buREw7tYi2cbG5VsPHq___-q=s40-c-rp-mo-br100',
            'rating' => 5,
            'content' => 'I had an exceptional experience working with Sheilla Lavadia. Her professionalism and dedication was evident from the start. Not only did she ensure every detail was handled with care, but she also managed to close our client\'s loan early, which was a huge bonus! Sheilla\'s communication was clear and consistent, making the entire process smooth and stress free. I highly recommend Sheilla Lavadia for anyone seeking a reliable and efficient loan officer. It was a pleasure working with you!',
            'date' => '6 months ago',
            'created_at' => '2024-10-04 13:52:16',
            'updated_at' => '2025-08-22 00:00:43',
        ),
        17 => 
        array (
            'id' => 18,
            'source' => 'google',
            'author' => 'Sharon Reyes',
            'img_url' => 'https://lh3.googleusercontent.com/a/ACg8ocJ0Mb0e2iYmcyWRq-kMbASPAhHT1UAgSfLtJhmmOPXH1GuRww=s40-c-rp-mo-br100',
            'rating' => 5,
            'content' => 'Loans by Sheilla has helped me many times in my house purchases and several refinancing needs. Sheilla is excellent in her trade. She always made sure that I am getting the best deals and I’m always at peace and very confident that I’m in good hands. ⭐️⭐️⭐️⭐️⭐️',
            'date' => '7 months ago',
            'created_at' => '2024-10-04 13:52:16',
            'updated_at' => '2025-08-22 00:00:43',
        ),
        18 => 
        array (
            'id' => 19,
            'source' => 'google',
            'author' => 'Karen Tungal',
            'img_url' => 'https://lh3.googleusercontent.com/a-/ALV-UjUUdz9gc0AuOVpjVJ_EN-3Sk66uW77HKWnCjxFMPdMXXclARUnP=s40-c-rp-mo-br100',
            'rating' => 5,
            'content' => 'She\'s patient and almost all knowing when it comes to mortgages! If you need help with anything about homeownership, she\'s the right person to go to.',
            'date' => '6 months ago',
            'created_at' => '2024-10-04 13:52:16',
            'updated_at' => '2025-08-22 00:00:43',
        ),
        19 => 
        array (
            'id' => 20,
            'source' => 'google',
            'author' => 'Keiye Anne Guinto',
            'img_url' => 'https://lh3.googleusercontent.com/a/ACg8ocJc2dD--brJrZC6ASXF-7EZYaMTSYdpeoGP_Mj1Vj4-3FhDT_0=s40-c-rp-mo-br100',
            'rating' => 5,
            'content' => 'We’re so grateful to the team who we have trusted and guide us through the process! You guys are the absolute definition of consummate professionalism. I would definitely say that you are in the best hands with this amazing team! 🙌🏻',
            'date' => '6 months ago',
            'created_at' => '2024-10-04 13:52:16',
            'updated_at' => '2025-08-22 00:00:43',
        ),
        20 => 
        array (
            'id' => 21,
            'source' => 'google',
            'author' => 'Marlon Ocampo',
            'img_url' => 'https://lh3.googleusercontent.com/a/ACg8ocJZHHnDHhFJxS2VKN8v64vWZN1MPKS9opWroE7-zc__ROIwQA=s40-c-rp-mo-br100',
            'rating' => 5,
            'content' => 'Very responsible, easy to talk and good work',
            'date' => '6 months ago',
            'created_at' => '2024-10-04 13:52:16',
            'updated_at' => '2025-08-22 00:00:43',
        ),
        21 => 
        array (
            'id' => 22,
            'source' => 'google',
            'author' => 'Melaku Mulissa',
            'img_url' => 'https://lh3.googleusercontent.com/a-/ALV-UjWh8WBNhRpFs3BRD19AUrsVZQVa5MK6ISggeJpC6lXGLGZS6Xcn=s40-c-rp-mo-br100',
            'rating' => 5,
            'content' => 'Sheilla Lavadia, I would love to express my gratitude to you and rest of your colleagues. specially on day one when I had talk with  you I never thought the confidence you gave me and you walked me through easy way on this complicated mortgage situation. Without you and your team I wouldn’t be the owner of the house 🏠 we’re enjoying . I do appreciate you all for such great support and patience. My family and I are very grateful for having you as loan processor. I also have confidence many people can be lucky enough if they work with you and your team.Melaku Mulissa/ Mekdes Berecha❤️🙏',
            'date' => '3 months ago',
            'created_at' => '2024-10-04 13:52:16',
            'updated_at' => '2025-08-22 00:00:43',
        ),
        22 => 
        array (
            'id' => 23,
            'source' => 'google',
            'author' => 'Evgeny Goldin',
            'img_url' => 'https://lh3.googleusercontent.com/a-/ALV-UjVXc26hiWh0tqmggetehANMK7pCwQgxfBtiN-4LidtcIZFdWizmyQ=s40-c-rp-mo-ba4-br100',
            'rating' => 5,
            'content' => 'Great experience, very professional service. Thank you!',
            'date' => '2 months ago',
            'created_at' => '2024-10-22 00:00:28',
            'updated_at' => '2025-08-22 00:00:43',
        ),
        23 => 
        array (
            'id' => 24,
            'source' => 'google',
            'author' => 'Dylan Duque',
            'img_url' => 'https://lh3.googleusercontent.com/a-/ALV-UjV3Foy_eCkhS7QHQegqam2voOdeZ-9X4IX7iKXTNuM2kl-657m8=s40-c-rp-mo-br100',
            'rating' => 5,
            'content' => 'Team worked with was very Professional and We were able to Close a Condo on time. Would recommend to use again!',
            'date' => '2 months ago',
            'created_at' => '2024-10-23 00:00:27',
            'updated_at' => '2025-08-22 00:00:43',
        ),
        24 => 
        array (
            'id' => 25,
            'source' => 'zillow',
            'author' => 'khoadtran93',
            'img_url' => 'https://ui-avatars.com/api/?name=khoadtran93',
            'rating' => 5,
            'content' => 'I wanted to take a moment to express my sincere gratitude for the exceptional service provided by everyone during the house closing process. As a first-time homebuyer, I had many questions and concerns, but everyone’s professionalism, efficiency, and attention to detail made the entire experience seamless.
Here are a few highlights that truly stood out:

1. Clear Communication: Your team consistently kept me informed at every step. Whether it was explaining the paperwork, coordinating with the title company, or addressing any last-minute issues, your communication was prompt and thorough.
2. Timely Responses: I appreciate how quickly you responded to my emails and phone calls. It made me feel valued as a client and alleviated any anxiety I had about the process.
3. Expertise: Your knowledge of the real estate market and loan procedures was evident. You guided me through the maze of documents, ensuring that I understood each one before signing.
4. Smooth Closing: The closing day was stress-free, thanks to your meticulous planning. Everything was in order, and I felt confident that I was making the right decision.

Please extend my heartfelt thanks to everyone involved.You truly made a difference in my home buying journey, and I am excited to start this new chapter in my life.',
            'date' => 'April 13, 2024',
            'created_at' => '2024-10-25 18:23:26',
            'updated_at' => '2024-10-25 18:23:26',
        ),
        25 => 
        array (
            'id' => 26,
            'source' => 'zillow',
            'author' => 'jeduardomachuca',
            'img_url' => 'https://ui-avatars.com/api/?name=jeduardomachuca',
            'rating' => 5,
            'content' => 'Sheila was very helpful throughout the purchase process. Available all the time to questions and constant support. Very friendly and cooperative, respectful and friendly.',
            'date' => 'March 8, 2024',
            'created_at' => '2024-10-25 18:23:26',
            'updated_at' => '2024-10-25 18:23:26',
        ),
        26 => 
        array (
            'id' => 27,
            'source' => 'zillow',
            'author' => 'yaeleleta',
            'img_url' => 'https://ui-avatars.com/api/?name=yaeleleta',
            'rating' => 5,
        'content' => 'Sheilla Lavadia was a great lender. Even when she was on vacation she answered all my concerns and even though she was in hard situations to get access to her computer while she was on vacation (the time difference ) she always had a way of satisfying my needs. She\'s very helpful, very patient, and very responsive. She\'ll walk me  through the whole process and guide me  with every step. She goes beyond and above to meet my  expectation and answer all my concern.She did a great job.
Sheilla is one of the great people who love to see people\'s happy faces. 
Thank you Sheilla ',
            'date' => 'October 2, 2023',
            'created_at' => '2024-10-25 18:23:26',
            'updated_at' => '2024-10-25 18:23:26',
        ),
        27 => 
        array (
            'id' => 28,
            'source' => 'zillow',
            'author' => 'malvin 2122',
            'img_url' => 'https://ui-avatars.com/api/?name=malvin+2122',
            'rating' => 5,
            'content' => 'The whole processed was almost perfect, a little bump at the end but Sheilla pulled through. She is very knowledgeable and will guide and help u until the end!  I highly recommend her!!',
            'date' => 'March 23, 2020',
            'created_at' => '2024-10-25 18:23:26',
            'updated_at' => '2024-10-25 18:23:26',
        ),
        28 => 
        array (
            'id' => 29,
            'source' => 'zillow',
            'author' => 'Manilyn Delantar',
            'img_url' => 'https://ui-avatars.com/api/?name=Manilyn+Delantar',
            'rating' => 5,
            'content' => 'Sheilla Lavadia was a great lender. She\'s very helpful, very patient and very responsive. She\'ll walk you through the whole process and guide you with every step. She goes beyond and above to meet your expectation and answer all your concern. She did a great job.',
            'date' => 'August 10, 2019',
            'created_at' => '2024-10-25 18:23:26',
            'updated_at' => '2024-10-25 18:23:26',
        ),
        29 => 
        array (
            'id' => 30,
            'source' => 'google',
            'author' => 'KHANH LE',
            'img_url' => 'https://lh3.googleusercontent.com/a/ACg8ocIhZxLII2AJLya6OsbbJ2I1WbuVvfQVlSSgAI8jDoVRPUQiQsI=s40-c-rp-mo-br100',
            'rating' => 5,
            'content' => 'Sheilla and Elaine were excellent of their jobs. They’re very quick to respond and update us on the progress of the transactions. We would definitely reach out to them again in the future.',
            'date' => '2 months ago',
            'created_at' => '2024-11-06 00:00:29',
            'updated_at' => '2025-08-22 00:00:43',
        ),
        30 => 
        array (
            'id' => 31,
            'source' => 'google',
            'author' => 'Melinda Ainsworth',
            'img_url' => 'https://lh3.googleusercontent.com/a/ACg8ocJu3PXZ4Ld7BzP7zo80GZjVXZEUL0lbC0lxeaHx1hk7uadBcA=s40-c-rp-mo-br100',
            'rating' => 5,
        'content' => 'This is my 4th property working with Sheilla and her team. Even moving away to a different state (thankfully shes also licenced in Florida), it made our experience so easy...and SOOOOOOOOO fast. I love the technology, and digital access. Everyone on her team was very helpful along the way and always kept me updated.',
            'date' => '2 months ago',
            'created_at' => '2024-11-14 00:00:27',
            'updated_at' => '2025-08-22 00:00:43',
        ),
        31 => 
        array (
            'id' => 32,
            'source' => 'google',
            'author' => 'Rey Lagun',
            'img_url' => 'https://lh3.googleusercontent.com/a/ACg8ocInJGOLnZkjKR4FyBQXElo4SudXOcAf7OkF8xrpmpfWiM6rtw=s40-c-rp-mo-br100',
            'rating' => 5,
            'content' => 'Outstanding Experience with Sheilla\'s TeamMy experience with Sheilla\'s Team was simply outstanding. They consistently provided timely pre-approval letters whenever we needed them. Their team members are true professionals, offering clear and thoughtful guidance throughout the entire process. Thanks to their expertise, what is typically a stressful journey was transformed into a smooth and logical one.Her team excelled in explaining every aspect of securing a loan, offering valuable insights on the best rates to lock in, and ensuring the entire process was seamless. Their user-friendly portal made it easy to upload and review documents, keeping track of all requirements efficiently. Our loan was approved well ahead of time, allowing us to close without any hassles or issues. We secured a fantastic rate and would wholeheartedly recommend them to anyone looking for a seamless mortgage experience.',
            'date' => '2 months ago',
            'created_at' => '2024-11-16 00:00:25',
            'updated_at' => '2025-08-22 00:00:43',
        ),
        32 => 
        array (
            'id' => 33,
            'source' => 'google',
            'author' => 'Daniela Mae Capili',
            'img_url' => 'https://lh3.googleusercontent.com/a-/ALV-UjXmoH_2RXAe-rvex8njLGuVuCMyELtHsv4wBWrALsArO1Tnj3Q7=s40-c-rp-mo-br100',
            'rating' => 5,
            'content' => 'I want to thank Sheilla and her team for making our first time home buying experience a great one. It was a very smooth process and we were able to close earlier than expected. Sheilla is very enthusiastic and very easy to work with, you’ll know that she only wants what’s best for her clients and for her clients not to miss any opportunity that is available to them. Amazing team! Would highly recommend.',
            'date' => 'a month ago',
            'created_at' => '2024-11-17 00:00:30',
            'updated_at' => '2025-08-22 00:00:43',
        ),
        33 => 
        array (
            'id' => 34,
            'source' => 'google',
            'author' => 'Jeremy Garcia',
            'img_url' => 'https://lh3.googleusercontent.com/a/ACg8ocLwnRVXQrC-d70xYkpdVnIeHziPsHRfKXdebsReYxSiJGM18g=s40-c-rp-mo-br100',
            'rating' => 5,
            'content' => 'Sheilla and her team were very patient and provided us with so much reassurance as we were first home buyers. I can\'t thank them enough.',
            'date' => 'a month ago',
            'created_at' => '2024-11-25 00:00:30',
            'updated_at' => '2025-08-22 00:00:43',
        ),
        34 => 
        array (
            'id' => 35,
            'source' => 'google',
            'author' => 'Rachelle Abisate',
            'img_url' => 'https://lh3.googleusercontent.com/a/ACg8ocIRZKnZBHjroRb3x1lnOMYoOEUY7CzFR6noiIxwvlJI1FXGzg=s40-c-rp-mo-br100',
            'rating' => 5,
            'content' => 'Thank you Sheila and your team for all your help and assistance with our home buying process. I know my brother and I were busy and sometimes it took us a while to respond back however you guys were extremely patience and work around with our schedule while making sure we are on time with paper works. We are very happy and grateful that we finally can call our house our home. We recommend Sheila and her team to anyone looking to buy a house. They went an extra mile with helping us look for a mortgage lender as well as a home insurance that fits are needs. So my brother and I want to thank you and your team for all you’ve done.',
            'date' => 'a month ago',
            'created_at' => '2025-01-24 21:29:41',
            'updated_at' => '2025-08-22 00:00:43',
        ),
        35 => 
        array (
            'id' => 36,
            'source' => 'google',
            'author' => 'Nick Frank',
            'img_url' => 'https://lh3.googleusercontent.com/a-/ALV-UjUi8XdqG8gwTdyPtFdhBiVyuUIcaEgjgLy6starteD_IjjJICEFXA=s40-c-rp-mo-br100',
            'rating' => 5,
            'content' => 'I had a great experience with Sheila and her team. I was shopping for a competitive loan offer, late in the game while I was in Escrow. Sheila and her team were able to help me out fast, and secure a better a loan. Would highly reccomend!',
            'date' => '3 weeks ago',
            'created_at' => '2025-01-24 21:29:41',
            'updated_at' => '2025-08-22 00:00:43',
        ),
        36 => 
        array (
            'id' => 37,
            'source' => 'google',
            'author' => 'EDWIN ILAO',
            'img_url' => 'https://lh3.googleusercontent.com/a/ACg8ocJLLshjBtp91_cIFJHoOrayH15jCe4Iftp6CLAILzgklCEzHQ=s40-c-rp-mo-br100',
            'rating' => 4,
            'content' => 'As a real estate broker, I’ve worked with many mortgage professionals, and I can confidently say that Sheilla Lavadia stands out. She was incredibly helpful during my personal home-buying journey, demonstrating expertise, dedication, and professionalism every step of the way. I wouldn’t hesitate to recommend her to my clients!',
            'date' => 'a month ago',
            'created_at' => '2025-01-24 21:29:41',
            'updated_at' => '2025-08-22 00:00:43',
        ),
        37 => 
        array (
            'id' => 38,
            'source' => 'google',
            'author' => 'Norykhu',
            'img_url' => 'https://lh3.googleusercontent.com/a/ACg8ocL7UUozVrpje1QOg3XL95Tw3Lb0e6vzbF3WtgyP9Mll3kXT4g=s40-c-rp-mo-br100',
            'rating' => 5,
            'content' => 'Big thank you to Ate Sheila\'s team! They\'re the best among the rest! I definitely recommend them as your Lender! 👌☺️🏠',
            'date' => 'a month ago',
            'created_at' => '2025-01-24 21:29:41',
            'updated_at' => '2025-08-22 00:00:43',
        ),
        38 => 
        array (
            'id' => 39,
            'source' => 'google',
            'author' => 'Marissa Maquiraya',
            'img_url' => 'https://lh3.googleusercontent.com/a-/ALV-UjXSLwUJPBanQrCpxP9o04_rN7m-se-Xtio048k1nzGlG7ntsIaz=s40-c-rp-mo-br100',
            'rating' => 5,
            'content' => 'very helpful and made sure we are able to get the house we wanted.',
            'date' => 'a month ago',
            'created_at' => '2025-01-24 21:29:41',
            'updated_at' => '2025-08-22 00:00:43',
        ),
        39 => 
        array (
            'id' => 40,
            'source' => 'google',
            'author' => 'Michelle Smart',
            'img_url' => 'https://lh3.googleusercontent.com/a-/ALV-UjWu5dPlI_4GQy3JfGGpozNSQ6U5pqTLO6NPDb5ipZFt8l7Qrz52=s40-c-rp-mo-br100',
            'rating' => 5,
            'content' => 'Sheilla is always available when I need her. Her wealth of knowledge, low interest rates, and uplifting personality make mortgage an enjoyable experience. I recommend her mortgage services to any who are looking for competitive options.',
            'date' => 'a day ago',
            'created_at' => '2025-01-24 21:29:41',
            'updated_at' => '2025-08-22 00:00:43',
        ),
        40 => 
        array (
            'id' => 41,
            'source' => 'experience',
            'author' => 'Juan A',
            'img_url' => 'https://ui-avatars.com/api/?name=Juan+A',
            'rating' => 5,
            'content' => 'Responsive and made huge efforts to close smoothly.',
            'date' => 'January 1, 2025',
            'created_at' => '2025-01-24 21:29:41',
            'updated_at' => '2025-01-24 21:29:41',
        ),
        41 => 
        array (
            'id' => 42,
            'source' => 'experience',
            'author' => 'Michael P',
            'img_url' => 'https://ui-avatars.com/api/?name=Michael+P',
            'rating' => 5,
            'content' => 'Sheilla was great and kept me updated through the process. I would recommend her great service again for future friends and family.',
            'date' => 'January 1, 2025',
            'created_at' => '2025-01-24 21:29:41',
            'updated_at' => '2025-01-24 21:29:41',
        ),
        42 => 
        array (
            'id' => 43,
            'source' => 'experience',
            'author' => 'Kathy V',
            'img_url' => 'https://ui-avatars.com/api/?name=Kathy+V',
            'rating' => 5,
            'content' => 'Sheila is very responsive and work beyond her working hours to make sure we’re taking care of. ',
            'date' => 'January 1, 2025',
            'created_at' => '2025-01-24 21:29:41',
            'updated_at' => '2025-01-24 21:29:41',
        ),
        43 => 
        array (
            'id' => 44,
            'source' => 'experience',
            'author' => 'Sami K',
            'img_url' => 'https://ui-avatars.com/api/?name=Sami+K',
            'rating' => 5,
            'content' => 'Extremely knowledgeable and always working around the clock to guide you through the process.',
            'date' => 'January 1, 2025',
            'created_at' => '2025-01-24 21:29:41',
            'updated_at' => '2025-01-24 21:29:41',
        ),
        44 => 
        array (
            'id' => 45,
            'source' => 'experience',
            'author' => 'Yongjian M',
            'img_url' => 'https://ui-avatars.com/api/?name=Yongjian+M',
            'rating' => 5,
            'content' => 'Sheilla is the best loan officer. She has been helping us gone through the whole process hardly. ',
            'date' => 'January 1, 2025',
            'created_at' => '2025-01-24 21:29:41',
            'updated_at' => '2025-01-24 21:29:41',
        ),
        45 => 
        array (
            'id' => 46,
            'source' => 'experience',
            'author' => 'Montaser M',
            'img_url' => 'https://ui-avatars.com/api/?name=Montaser+M',
            'rating' => 5,
            'content' => 'Sheilla she make it good she is the best I did buy 3 times with her she is the best ',
            'date' => 'January 1, 2025',
            'created_at' => '2025-01-24 21:29:41',
            'updated_at' => '2025-01-24 21:29:41',
        ),
        46 => 
        array (
            'id' => 47,
            'source' => 'experience',
            'author' => 'Zonggan H',
            'img_url' => 'https://ui-avatars.com/api/?name=Zonggan+H',
            'rating' => 5,
            'content' => 'Sheilla, she is very professional and patient during our loan processing. ',
            'date' => 'January 1, 2025',
            'created_at' => '2025-01-24 21:29:41',
            'updated_at' => '2025-01-24 21:29:41',
        ),
        47 => 
        array (
            'id' => 48,
            'source' => 'experience',
            'author' => 'Franklin J',
            'img_url' => 'https://ui-avatars.com/api/?name=Franklin+J',
            'rating' => 5,
            'content' => 'Sheilla was Amazing, she went above and beyond what I expected.',
            'date' => 'January 1, 2025',
            'created_at' => '2025-01-24 21:29:41',
            'updated_at' => '2025-01-24 21:29:41',
        ),
        48 => 
        array (
            'id' => 49,
            'source' => 'experience',
            'author' => 'Jeffrey Q',
            'img_url' => 'https://ui-avatars.com/api/?name=Jeffrey+Q',
            'rating' => 5,
            'content' => 'Easy to communicate and transactions very straight forward no stress gladly very supportive positive advices.',
            'date' => 'January 1, 2025',
            'created_at' => '2025-01-24 21:29:41',
            'updated_at' => '2025-01-24 21:29:41',
        ),
        49 => 
        array (
            'id' => 50,
            'source' => 'experience',
            'author' => 'Florfina F',
            'img_url' => 'https://ui-avatars.com/api/?name=Florfina+F',
            'rating' => 5,
            'content' => 'She is smart agent and  very patience for the entire process all the documents that needed and mostly easy to contact.She deserved as Agents.',
            'date' => 'January 1, 2025',
            'created_at' => '2025-01-24 21:29:41',
            'updated_at' => '2025-01-24 21:29:41',
        ),
        50 => 
        array (
            'id' => 51,
            'source' => 'experience',
            'author' => 'Wilson F',
            'img_url' => 'https://ui-avatars.com/api/?name=Wilson+F',
            'rating' => 5,
            'content' => 'She’s nice and she’s willing to help if her client need anything. She knowledgeable.',
            'date' => 'January 1, 2025',
            'created_at' => '2025-01-24 21:29:41',
            'updated_at' => '2025-01-24 21:29:41',
        ),
        51 => 
        array (
            'id' => 52,
            'source' => 'experience',
            'author' => 'Bernadette K',
            'img_url' => 'https://ui-avatars.com/api/?name=Bernadette+K',
            'rating' => 5,
            'content' => 'I’ve worked with Sheilla several times and it’s always a good experience. She thinks of what’s best for the clients and provides the best options ',
            'date' => 'January 1, 2025',
            'created_at' => '2025-01-24 21:29:41',
            'updated_at' => '2025-01-24 21:29:41',
        ),
        52 => 
        array (
            'id' => 53,
            'source' => 'experience',
            'author' => 'Rowena D',
            'img_url' => 'https://ui-avatars.com/api/?name=Rowena+D',
            'rating' => 5,
            'content' => 'She is very accomodating, always ready to give a helping hand. She explains the process and what to expect. ',
            'date' => 'January 1, 2025',
            'created_at' => '2025-01-24 21:29:41',
            'updated_at' => '2025-01-24 21:29:41',
        ),
        53 => 
        array (
            'id' => 54,
            'source' => 'experience',
            'author' => 'Johnbenedict S',
            'img_url' => 'https://ui-avatars.com/api/?name=Johnbenedict+S',
            'rating' => 5,
            'content' => 'The convenience of getting in contact with the Fairway Team and having all my questions answered in a timely matter!',
            'date' => 'January 1, 2025',
            'created_at' => '2025-01-24 21:29:41',
            'updated_at' => '2025-01-24 21:29:41',
        ),
        54 => 
        array (
            'id' => 55,
            'source' => 'experience',
            'author' => 'Peihuan C',
            'img_url' => 'https://ui-avatars.com/api/?name=Peihuan+C',
            'rating' => 5,
            'content' => 'Sheilla is very professional and patiently.We appreciate her help.',
            'date' => 'January 1, 2025',
            'created_at' => '2025-01-24 21:29:41',
            'updated_at' => '2025-01-24 21:29:41',
        ),
        55 => 
        array (
            'id' => 56,
            'source' => 'experience',
            'author' => 'Michael C',
            'img_url' => 'https://ui-avatars.com/api/?name=Michael+C',
            'rating' => 5,
        'content' => 'Sheilla helped me tremendously day and night. Thank you. She is highly recommended:)',
        'date' => 'January 1, 2025',
        'created_at' => '2025-01-24 21:29:41',
        'updated_at' => '2025-01-24 21:29:41',
    ),
    56 => 
    array (
        'id' => 57,
        'source' => 'experience',
        'author' => 'Bernardino P',
        'img_url' => 'https://ui-avatars.com/api/?name=Bernardino+P',
        'rating' => 5,
        'content' => 'I didn’t encounter any problem with m loan processing . Thank you',
        'date' => 'January 1, 2025',
        'created_at' => '2025-01-24 21:29:41',
        'updated_at' => '2025-01-24 21:29:41',
    ),
    57 => 
    array (
        'id' => 58,
        'source' => 'experience',
        'author' => 'Rou-An C',
        'img_url' => 'https://ui-avatars.com/api/?name=Rou-An+C',
        'rating' => 5,
        'content' => 'She has very great customer service and always being helpful when confused ',
        'date' => 'January 1, 2025',
        'created_at' => '2025-01-24 21:29:41',
        'updated_at' => '2025-01-24 21:29:41',
    ),
    58 => 
    array (
        'id' => 59,
        'source' => 'experience',
        'author' => 'Exequiel B',
        'img_url' => 'https://ui-avatars.com/api/?name=Exequiel+B',
        'rating' => 5,
        'content' => 'Very helpful and nice. Answers all our questions timely',
        'date' => 'January 1, 2025',
        'created_at' => '2025-01-24 21:29:41',
        'updated_at' => '2025-01-24 21:29:41',
    ),
    59 => 
    array (
        'id' => 60,
        'source' => 'experience',
        'author' => 'Jimmy G',
        'img_url' => 'https://ui-avatars.com/api/?name=Jimmy+G',
        'rating' => 5,
        'content' => 'Sheila was very friendly and helpful. She answered and explained all of our concerns. She is really on top of her work. ',
        'date' => 'January 1, 2025',
        'created_at' => '2025-01-24 21:29:41',
        'updated_at' => '2025-01-24 21:29:41',
    ),
    60 => 
    array (
        'id' => 61,
        'source' => 'experience',
        'author' => 'Thu T',
        'img_url' => 'https://ui-avatars.com/api/?name=Thu+T',
        'rating' => 5,
        'content' => 'Everything has been go thought so smoothly and quick. I’m glad that I know Sheilla who is the best Loan officers 
Thank you again :) ',
    'date' => 'January 1, 2025',
    'created_at' => '2025-01-24 21:29:41',
    'updated_at' => '2025-01-24 21:29:41',
),
61 => 
array (
    'id' => 62,
    'source' => 'experience',
    'author' => 'Andrew M',
    'img_url' => 'https://ui-avatars.com/api/?name=Andrew+M',
    'rating' => 5,
    'content' => 'She was very informative and great communication.   ',
    'date' => 'January 1, 2025',
    'created_at' => '2025-01-24 21:29:41',
    'updated_at' => '2025-01-24 21:29:41',
),
62 => 
array (
    'id' => 63,
    'source' => 'experience',
    'author' => 'Nida A',
    'img_url' => 'https://ui-avatars.com/api/?name=Nida+A',
    'rating' => 5,
    'content' => 'Sheilla is easy to work with.  She always responded right away to all my issues and questions.  She is very professional overall.



',
    'date' => 'January 1, 2025',
    'created_at' => '2025-01-24 21:29:41',
    'updated_at' => '2025-01-24 21:29:41',
),
63 => 
array (
    'id' => 64,
    'source' => 'experience',
    'author' => 'Carol B',
    'img_url' => 'https://ui-avatars.com/api/?name=Carol+B',
    'rating' => 5,
    'content' => 'Ms. Sheilla is very knowledgeable. Stress free process from start to finish. ',
    'date' => 'January 1, 2025',
    'created_at' => '2025-01-24 21:29:41',
    'updated_at' => '2025-01-24 21:29:41',
),
64 => 
array (
    'id' => 65,
    'source' => 'experience',
    'author' => 'Miguel H',
    'img_url' => 'https://ui-avatars.com/api/?name=Miguel+H',
    'rating' => 5,
    'content' => 'Always kind. Fast to answer in any circumstances...always there to help. 
We\'re really happy with sheilla and fairway.
Amazing results...thanks ',
    'date' => 'January 1, 2025',
    'created_at' => '2025-01-24 21:29:41',
    'updated_at' => '2025-01-24 21:29:41',
),
65 => 
array (
    'id' => 66,
    'source' => 'experience',
    'author' => 'Mark-Anthony O',
    'img_url' => 'https://ui-avatars.com/api/?name=Mark-Anthony+O',
    'rating' => 5,
    'content' => 'She\'s very approachable when she needs somethings and very nice and friendly.',
    'date' => 'January 1, 2025',
    'created_at' => '2025-01-24 21:29:41',
    'updated_at' => '2025-01-24 21:29:41',
),
66 => 
array (
    'id' => 67,
    'source' => 'experience',
    'author' => 'Harold G',
    'img_url' => 'https://ui-avatars.com/api/?name=Harold+G',
    'rating' => 5,
    'content' => 'Ms Sheilla will do everything and help you get your dream house. ',
    'date' => 'January 1, 2025',
    'created_at' => '2025-01-24 21:29:41',
    'updated_at' => '2025-01-24 21:29:41',
),
67 => 
array (
    'id' => 68,
    'source' => 'experience',
    'author' => 'Debbie L',
    'img_url' => 'https://ui-avatars.com/api/?name=Debbie+L',
    'rating' => 5,
    'content' => 'I say great coz , they nice people to talk to, they response so quickly . We’re been guided along the way .',
    'date' => 'January 1, 2025',
    'created_at' => '2025-01-24 21:29:41',
    'updated_at' => '2025-01-24 21:29:41',
),
68 => 
array (
    'id' => 69,
    'source' => 'experience',
    'author' => 'Hanz R',
    'img_url' => 'https://ui-avatars.com/api/?name=Hanz+R',
    'rating' => 5,
    'content' => 'We are first time homebuyers and theyre with us patiently  throughout the process...',
    'date' => 'January 1, 2025',
    'created_at' => '2025-01-24 21:29:41',
    'updated_at' => '2025-01-24 21:29:41',
),
69 => 
array (
    'id' => 70,
    'source' => 'experience',
    'author' => 'Creslie T',
    'img_url' => 'https://ui-avatars.com/api/?name=Creslie+T',
    'rating' => 5,
    'content' => 'They’re very helpful and very patient answering all all your questions and concerns. ',
    'date' => 'January 1, 2025',
    'created_at' => '2025-01-24 21:29:41',
    'updated_at' => '2025-01-24 21:29:41',
),
70 => 
array (
    'id' => 71,
    'source' => 'experience',
    'author' => 'Benjamin D',
    'img_url' => 'https://ui-avatars.com/api/?name=Benjamin+D',
    'rating' => 5,
    'content' => 'Sheilla Lavadia is very helpful in every way. She walked us through all the process. ',
    'date' => 'January 1, 2025',
    'created_at' => '2025-01-24 21:29:41',
    'updated_at' => '2025-01-24 21:29:41',
),
71 => 
array (
    'id' => 72,
    'source' => 'experience',
    'author' => 'Jorge A',
    'img_url' => 'https://ui-avatars.com/api/?name=Jorge+A',
    'rating' => 5,
    'content' => 'Sheilla was very professional and kept us informed for any possible issues with our loan, it was great having her on our side getting our home. ',
    'date' => 'January 1, 2025',
    'created_at' => '2025-01-24 21:29:41',
    'updated_at' => '2025-01-24 21:29:41',
),
72 => 
array (
    'id' => 73,
    'source' => 'experience',
    'author' => 'Yvest L',
    'img_url' => 'https://ui-avatars.com/api/?name=Yvest+L',
    'rating' => 5,
    'content' => 'Sheilla is excellent and professional to her client. Easy to reach out whenever I have questions About the process. Recommendable to everyone ',
    'date' => 'January 1, 2025',
    'created_at' => '2025-01-24 21:29:42',
    'updated_at' => '2025-01-24 21:29:42',
),
73 => 
array (
    'id' => 74,
    'source' => 'experience',
    'author' => 'Alejandro P',
    'img_url' => 'https://ui-avatars.com/api/?name=Alejandro+P',
    'rating' => 5,
    'content' => 'Great services , she understood our needs and requirements for The entire process 

We were very pleased !!!

Thank you ',
    'date' => 'January 1, 2025',
    'created_at' => '2025-01-24 21:29:42',
    'updated_at' => '2025-01-24 21:29:42',
),
));
        
        
    }
}