import { render, screen } from '@testing-library/angular';
import { AppComponent } from './app.component';

it('should create the app', async () => {
  await render(AppComponent);
  expect(screen.getByRole('heading')).toBeTruthy();
});

it('should re-create the app', async () => {
  await render(AppComponent);
  expect(screen.getByRole('heading')).toBeTruthy();
});
