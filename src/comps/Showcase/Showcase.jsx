import React from "react";
import Item from "../Item/Item";
import "./Showcase.css";

const Showcase = ({ title }) => {
	return (
		<div className='showcase'>
			<h1>{title}</h1>
			<div className='showcase-items'>
				<Item
					title='Orange'
					price='2.99'
					src='https://www.picng.com/upload/orange/png_orange_9348.png'
				/>
				<Item
					title='Apple'
					price='2.49'
					src='https://pngfolio.com/images/all_img/copy/1637340868apple-png.png'
				/>
				<Item
					title='Watermelon'
					price='9.99'
					src='https://www.pngall.com/wp-content/uploads/2016/04/Watermelon-Free-Download-PNG.png'
				/>
				<Item
					title='Peach'
					price='3.49'
					src='https://static.wixstatic.com/media/2cd43b_149e0b7004de4ad0901c130861f807c5~mv2.png/v1/fit/w_320,h_331,q_90/2cd43b_149e0b7004de4ad0901c130861f807c5~mv2.png'
				/>
				<Item
					title='Orange'
					price='2.99'
					src='https://www.picng.com/upload/orange/png_orange_9348.png'
				/>
				<Item
					title='Apple'
					price='2.49'
					src='https://pngfolio.com/images/all_img/copy/1637340868apple-png.png'
				/>
				<Item
					title='Watermelon'
					price='9.99'
					src='https://www.pngall.com/wp-content/uploads/2016/04/Watermelon-Free-Download-PNG.png'
				/>
				<Item
					title='Peach'
					price='3.49'
					src='https://static.wixstatic.com/media/2cd43b_149e0b7004de4ad0901c130861f807c5~mv2.png/v1/fit/w_320,h_331,q_90/2cd43b_149e0b7004de4ad0901c130861f807c5~mv2.png'
				/>
			</div>
		</div>
	);
};

export default Showcase;
