'use client';

import { Button, Card, CardContent, Typography } from '@mui/material';

export function MUIExample() {
  return (
    <Card sx={{ maxWidth: 345, m: 2 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Material UI 示例
        </Typography>
        <Typography variant="body2" color="text.secondary">
          这是一个Material Design 3组件示例，展示了卡片和按钮的使用。
        </Typography>
        <Button variant="contained" sx={{ mt: 2 }}>
          点击我
        </Button>
      </CardContent>
    </Card>
  );
} 