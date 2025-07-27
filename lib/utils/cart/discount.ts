import { discountThresholds } from '@/data/discountThresholds';

export function getCurrentDiscountRate(count: number): number {
  let currentRate = 0;
  for (const { threshold, discountRate } of discountThresholds) {
    if (count >= threshold) {
      currentRate = discountRate;
    } else {
      break;
    }
  }
  return currentRate;
}

export function getNextDiscountRate(count: number) {
  return discountThresholds.find(({ threshold }) => count < threshold);
}

export function getProgressPercentage(count: number): string {
  const thresholds = discountThresholds;

  const next = thresholds.find(({ threshold }) => count < threshold);
  const prev = [...thresholds].reverse().find(({ threshold }) => count >= threshold);

  const start = prev?.threshold ?? 0;
  const end = next?.threshold ?? thresholds[thresholds.length - 1].threshold;

  const range = end - start;
  const progress = count - start;

  if (range <= 0) return '100%';

  return (progress / range) * 100 + '%';
}

export function applyDiscount(price: number, rate: number): number {
  return roundToTwoDecimalPlaces(price * (1 - rate / 100));
}

export function calculateTotalPrice(
  items: {
    [id: string]: {
      count: number;
      price: number;
    };
  },
  discountRate: number
): number {
  let total = 0;
  for (const { count, price } of Object.values(items)) {
    const discounted = applyDiscount(price, discountRate);
    total += roundToTwoDecimalPlaces(discounted * count);
  }
  return Math.round(total * 100) / 100;
}

function roundToTwoDecimalPlaces(num: number): number {
  return Math.round(num * 100) / 100;
}

