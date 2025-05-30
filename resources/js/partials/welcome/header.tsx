import AppLogoIcon from '@/components/app-logo-icon';

export default function Header() {
    return (
        <div className="flex items-center justify-between px-32 py-8">
            <div>
                <AppLogoIcon className="size-10" />
            </div>
            <div className="flex flex-col items-center">
                <h3 className="font-semibold">FOR FREE CONSULTATION:</h3>
                <h4 className="text-3xl font-semibold text-red-800">(425) 900 6082</h4>
            </div>
        </div>
    );
}
