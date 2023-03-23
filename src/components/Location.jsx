import React from 'react'
import './Location.css'

const Location = ({ id, type, name, dimension, residents, created }) => {
	return (
		<section className='Location__Info'>
			<h4 className='Location__Item'> ID:
				<span className='Location__Span'>{id}</span>
			</h4>

			<h4 className='Location__Item'> Name:
				<span className='Location__Span'>{name}</span>
			</h4>

			<h4 className='Location__Item'> type:
				<span className='Location__Span'>{type}</span>
			</h4>

			<h4 className='Location__Item'> Dimension:
				<span className='Location__Span'>{dimension}</span>
			</h4>

			<h4 className='Location__Item'> Population:
				<span className='Location__Span'>{residents.length}</span>
			</h4>
		</section>
	)
}

export default Location