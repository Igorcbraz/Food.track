import { expect, test } from '@playwright/test'

test('sign up successfully', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })

  await page
    .getByRole('textbox', { name: 'Nome do estabelecimento' })
    .fill('Food Track')

  await page.getByRole('textbox', { name: 'Seu nome' }).fill('John Doe')

  await page
    .getByRole('textbox', { name: 'Seu e-mail' })
    .fill('johndoe@gmail.com')

  await page.getByRole('textbox', { name: 'Seu celular' }).fill('11999999999')

  await page.getByRole('button', { name: 'Finalizar Cadastro' }).click()

  const toast = page.getByText('Restaurante cadastrado com sucesso.')

  await expect(toast).toBeVisible()
})

test('sign up with error', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })

  await page
    .getByRole('textbox', { name: 'Nome do estabelecimento' })
    .fill('Invalid Name')

  await page.getByRole('textbox', { name: 'Seu nome' }).fill('John Doe')

  await page
    .getByRole('textbox', { name: 'Seu e-mail' })
    .fill('johndoe@gmail.com')

  await page.getByRole('textbox', { name: 'Seu celular' }).fill('11999999999')

  await page.getByRole('button', { name: 'Finalizar Cadastro' }).click()

  const toast = page.getByText('Erro ao cadastrar restaurante.')

  await expect(toast).toBeVisible()
})

test('navigate to new login page', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })

  await page.getByRole('link', { name: 'Fazer login' }).click()

  expect(page.url()).toContain('/sign-in')
})
