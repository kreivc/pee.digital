import React from "react";
import {
	SidebarContainer,
	Icon,
	CloseIcon,
	SidebarWrapper,
	SidebarMenu,
	SidebarLink,
	SideBtnWrap,
	SidebarGotoP,
	SidebarLinkGoto,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
	return (
		<SidebarContainer isOpen={isOpen} onClick={toggle}>
			<Icon onClick={toggle}>
				<CloseIcon />
			</Icon>
			<SidebarWrapper>
				<SidebarMenu>
					<SidebarLink to="about" onClick={toggle}>
						About
					</SidebarLink>
					<SidebarLink to="tokenomics" onClick={toggle}>
						Tokenomics
					</SidebarLink>
					<SidebarLink to="timeline" onClick={toggle}>
						Timeline
					</SidebarLink>
					<SidebarLinkGoto
						href="https://poocoin.app/tokens/0x402529cbe402f87fc1a9c97fab0abada0a6da334"
						target="_blank"
					>
						Chart
					</SidebarLinkGoto>
				</SidebarMenu>
				<SideBtnWrap>
					<SidebarGotoP
						href="https://pancakeswap.finance/"
						target="_blank"
					>
						Buy On Pancake
					</SidebarGotoP>
				</SideBtnWrap>
			</SidebarWrapper>
		</SidebarContainer>
	);
};

export default Sidebar;
