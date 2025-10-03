import {DetailedHTMLProps, ImgHTMLAttributes} from 'react';

export default function AppLogoIcon(props: DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>) {
    return (
        <img src="/images/lbs.png" {...props} alt="logo"></img>
    );
}
