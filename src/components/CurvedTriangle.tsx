import { useEffect, useRef } from "react";

interface CurvedTriangleProps {
  color?: string; // optional prop
  w?: number;
  h?: number;
}

function CurvedTriangle({ color = "black", w = 60, h = 60 }: CurvedTriangleProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    ctx.clearRect(0, 0, width, height);

    ctx.beginPath();

    // Top-left corner
    ctx.moveTo(0, 0);

    // Top-right corner
    ctx.lineTo(width, 0);

    // Concave bottom edge
    ctx.quadraticCurveTo(width / 6, height / 8, 0, height);

    // Close path
    ctx.closePath();

    ctx.fillStyle = color;
    ctx.fill();
  }, [color]); // re-run if color changes

  return <canvas ref={canvasRef} width={w} height={h} />;
}

export default CurvedTriangle;
