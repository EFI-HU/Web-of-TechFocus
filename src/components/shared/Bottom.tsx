'use client';

import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';

const Footer = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [currentLanguage, setCurrentLanguage] = useState('English');
  
  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  
  const changeLanguage = (language: string) => {
    setCurrentLanguage(language);
    handleMenuClose();
  };
  return (
    <Box component="footer" sx={{ 
      width: '100%', 
      bgcolor: 'background.paper', 
      py: { xs: 2, md: 3 }, 
      px: 2, 

    }}>
      <Box sx={{ 
        maxWidth: 'xl', 
        mx: 'auto',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: { xs: 2, md: 0 }
      }}>
        {/* Left side - Social media links (without text) */}
        <Box sx={{ 
          display: 'flex', 
          gap: 3,
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%'
        }}>
          <a href="#" style={{ display: 'flex', alignItems: 'center' }}>
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill="currentColor" d="M15.776.83H2.14C1.488.83.96 1.329.96 1.946v13.249c0 .617.528 1.119 1.181 1.119h13.635c.653 0 1.184-.502 1.184-1.116V1.946c0-.617-.531-1.116-1.184-1.116ZM5.706 14.025H3.333V6.633h2.375v7.392ZM4.52 5.626c-.762 0-1.378-.595-1.378-1.33 0-.735.616-1.33 1.378-1.33.76 0 1.375.595 1.375 1.33 0 .732-.615 1.33-1.375 1.33Zm10.075 8.399h-2.371v-3.593c0-.856-.016-1.96-1.235-1.96-1.234 0-1.422.935-1.422 1.9v3.653H7.197V6.633h2.275v1.01h.032c.315-.58 1.09-1.194 2.244-1.194 2.403 0 2.846 1.53 2.846 3.52v4.056Z"></path>
            </svg>
          </a>
          <a href="mailto:lwang@techfocususa.com" style={{ display: 'flex', alignItems: 'center' }}>
            <img src="/mail.png" alt="邮箱" width="18.7" height="18.7" />
          </a>
          <a href="#" style={{ display: 'flex', alignItems: 'center' }}>
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill="currentColor" fillRule="evenodd" d="M8.977.83C4.549.83.97 4.32.97 8.636c0 3.45 2.293 6.371 5.475 7.405.397.078.543-.168.543-.375 0-.18-.013-.8-.013-1.447-2.227.465-2.691-.93-2.691-.93-.358-.905-.888-1.138-.888-1.138-.73-.478.053-.478.053-.478.808.052 1.233.801 1.233.801.715 1.19 1.869.853 2.333.646.066-.504.278-.853.504-1.046-1.777-.181-3.646-.853-3.646-3.852 0-.853.318-1.55.822-2.093-.08-.194-.358-.995.08-2.068 0 0 .676-.207 2.2.801a7.94 7.94 0 0 1 2.002-.258c.676 0 1.365.09 2.001.258 1.525-1.008 2.2-.801 2.2-.801.438 1.073.16 1.874.08 2.068.517.542.822 1.24.822 2.093 0 2.999-1.869 3.658-3.659 3.852.292.245.544.71.544 1.047 0 1.047-.013 1.887-.013 2.145 0 .207.146.453.543.375 3.182-1.034 5.475-3.955 5.475-7.405C16.983 4.319 13.39.83 8.977.83Z" clipRule="evenodd"></path>
            </svg>
          </a>
          <a href="#" style={{ display: 'flex', alignItems: 'center' }}>
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill="currentColor" d="M13.158 2.058h2.248l-4.913 5.435 5.78 7.395h-4.525l-3.545-4.485-4.056 4.485h-2.25l5.255-5.813-5.545-7.017h4.64l3.205 4.1 3.706-4.1Zm-.79 11.527h1.246L5.57 3.293H4.233l8.135 10.292Z"></path>
            </svg>
          </a>
        </Box>
        
        {/* Middle section - Text (all on one line) */}
        <Box sx={{ whiteSpace: 'nowrap' }}>
          <Typography variant="body2" color="text.secondary" sx={{
            fontFamily: 'Roboto',
            fontSize: '14px',
            letterSpacing: '0em',
            fontWeight: 600,
            lineHeight: 1.4
          }}>
             TechFocus LLC.© 2025  All rights reserved.
          </Typography>
        </Box>
        
        {/* Right section - Language selector */}
<Box sx={{ 
  display: 'flex', 
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%'
}}>
  {/* 语言选择按钮 */}
  <Button 
    aria-controls="language-menu" // ARIA属性
    aria-haspopup="true" // 表示有弹出菜单
    onClick={handleMenuOpen} // 点击打开菜单
    sx={{ 
      color: 'text.primary', // 文字颜色
      fontFamily: 'Roboto', // 字体
      fontSize: '14px', // 字号
      letterSpacing: '0.04em', // 字间距
      fontWeight: 400, // 字重
      lineHeight: 1.4, // 行高
      width: '120px', // 宽度
      height: '40px', // 高度
      borderRadius: '100px', // 圆角
      padding: '11px 20px', // 内边距
      transition: '333ms cubic-bezier(.53, .00, .28, 1.00) border, 333ms cubic-bezier(.53, .00, .28, 1.00) opacity', // 过渡动画
      backgroundColor: '#0000000A' // 背景颜色
    }}
  >
    {currentLanguage} // 显示当前语言
  </Button>
  {/* 语言选择菜单 */}
  <Menu
    id="language-menu" // 菜单ID
    anchorEl={anchorEl} // 锚点元素
    keepMounted // 保持DOM挂载
    open={Boolean(anchorEl)} // 控制菜单显示
    onClose={handleMenuClose} // 关闭菜单回调
    anchorOrigin={{
      vertical: 'top', // 垂直锚点位置
      horizontal: 'center', // 水平锚点位置
    }}
    transformOrigin={{
      vertical: 'bottom', // 垂直变换位置
      horizontal: 'center', // 水平变换位置
    }}
    sx={{
      '& .MuiPaper-root': { // 菜单纸张样式
        backgroundColor: '#0000000A', // 背景颜色
        borderRadius: '8px', // 圆角
        boxShadow: 'none', // 无阴影
        marginBottom: '0px', // 底部外边距
        marginTop: '-5px', // 顶部外边距
      },
      '& .MuiMenuItem-root': { // 菜单项样式
        fontFamily: 'Roboto', // 字体
        fontSize: '14px', // 字号
        letterSpacing: '0.04em', // 字间距
        fontWeight: 400, // 字重
        lineHeight: 1.4, // 行高
        color: 'text.primary', // 文字颜色
        position: 'relative', // 相对定位
        '&.Mui-selected': { // 选中状态
          backgroundColor: 'transparent', // 透明背景
          '&:before': { // 选中标记
            content: '""', // 伪元素内容
            position: 'absolute', // 绝对定位
            left: '10px', // 左边距
            width: '8px', // 宽度
            height: '8px', // 高度
            borderRadius: '50%', // 圆形
            backgroundColor: 'text.primary' // 颜色
          }
        },
        '&:hover': { // 悬停状态
          backgroundColor: 'rgba(0, 0, 0, 0.04)' // 背景颜色
        }
      }
    }}
  >
    <MenuItem 
      onClick={() => changeLanguage('English')} 
      selected={currentLanguage === 'English'}
    >
      <Box sx={{ ml: currentLanguage === 'English' ? 2 : 0 }}>English</Box>
    </MenuItem>
    <MenuItem 
      onClick={() => changeLanguage('日本語')} 
      selected={currentLanguage === '日本語'}
    >
      <Box sx={{ ml: currentLanguage === '日本語' ? 2 : 0 }}>日本語</Box>
    </MenuItem>
  </Menu>
</Box>
      </Box>
    </Box>
  );
};

export default Footer;