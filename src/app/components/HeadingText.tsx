import EcgIcon from "./icon/Ecg";

const HeadingText = ({
    subtitle = '',
    title = '',
    highlight = '',
    description = '',
    showTitleIcon = false,
    addTextIconBgClass = false // New prop to control class addition
}) => {
    return (
        <>
            {showTitleIcon && (
                <div className={`title-icon ${addTextIconBgClass ? 'text-icon-bg' : ''}`}>
                    <EcgIcon />
                </div>
            )}
            {subtitle && (
                <div className="sub-title">
                    <h3>{subtitle}</h3>
                </div>
            )}
            {title && (
                <div className="title">
                    <h2>
                        {title}
                        {highlight && <span> {highlight}</span>}
                    </h2>
                </div>
            )}
            {description && (
                <div className="text">
                    <p>{description}</p>
                </div>
            )}
        </>
    )
}

export default HeadingText;
