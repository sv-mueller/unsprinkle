import React from "react";
import styled from "styled-components/macro";
import { createAvifSrcSet, createJpgSrcSet } from "../../data";

const PhotoGridItem = ({ id, src, alt, tags }) => {
	return (
		<article>
			<Anchor href={`/photos/${id}`}>
				<Picture>
					<source type="image/avif" srcSet={createAvifSrcSet(src)} />
					<source type="image/jpg" srcSet={createJpgSrcSet(src)} />
					<Image src={src} alt={alt} />
				</Picture>
			</Anchor>
			<Tags>
				{tags.map((tag) => (
					<Tag key={tag}>{tag}</Tag>
				))}
			</Tags>
		</article>
	);
};

const Anchor = styled.a`
	text-decoration: none;
	color: inherit;
	outline-offset: 4px;
`;

const Picture = styled.picture``;

const Image = styled.img`
	display: block;
	width: 100%;
	height: 300px;
	border-radius: 2px;
	margin-bottom: 8px;
	object-fit: cover;
`;

const Tags = styled.ul`
	display: flex;
	flex-wrap: no-wrap;
	gap: 8px;
`;

const Tag = styled.li`
	padding: 4px 8px;
	background: var(--color-gray-300);
	font-size: 0.875rem;
	font-weight: 475;
	color: var(--color-gray-800);
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
`;

export default PhotoGridItem;
