export const GifItem = ({url, title}) => {
  return (
    <div>
        <div className="card">
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    </div>
  )
}
