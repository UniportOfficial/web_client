import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import UserInfoPage from '../../components/register/UserinfoPage';

export default function Register(){
    return (
        <main>
            <UserInfoPage></UserInfoPage>
        </main>
    )
}