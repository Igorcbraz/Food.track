import { expect, test } from '@playwright/test'

test('update profile successfully', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })
  await page.getByRole('button', { name: 'Food Track' }).click()
  await page.getByRole('menuitem', { name: 'Perfil da loja' }).click()
  await page.getByRole('textbox', { name: 'Nome' }).fill('Another Name')
  await page
    .getByRole('textbox', { name: 'Descrição' })
    .fill('Another Description')

  await page.getByRole('button', { name: 'Salvar' }).click()

  await page.waitForLoadState('networkidle')

  const toast = page.getByText('Perfil atualizado com sucesso!')

  await expect(toast).toBeVisible()

  await page.getByRole('button', { name: 'Close' }).click()

  await expect(page.getByRole('button', { name: 'Another Name' })).toBeVisible()
})
